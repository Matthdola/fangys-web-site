import assert from 'node:assert/strict';
import test from 'node:test';
import { createContactHandler } from '../api/contact.mjs';
import { deliverEnquiry, readEmailConfig } from '../server/contact/emailjs.mjs';

const config = { serviceId: 'service', templateId: 'template', publicKey: 'public' };
const enquiry = {
  name: 'Example Visitor',
  email: 'visitor@example.com',
  organisation: '',
  subject: 'business',
  message: 'A test enquiry.',
};
const headers = { origin: 'https://fangys.hk', 'content-type': 'application/json' };

async function invoke(handler, request = {}) {
  const response = {
    headers: {},
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.code = code; return this; },
    json(body) { this.body = body; return this; },
  };
  await handler({ method: 'POST', headers, body: enquiry, ...request }, response);
  assert.equal(response.headers['Cache-Control'], 'no-store');
  return response;
}

test('rejects invalid requests before contacting the email provider', async () => {
  const handler = createContactHandler({
    env: config,
    deliver: () => assert.fail('Unexpected delivery'),
  });
  const cases = [
    [{ method: 'GET' }, 405],
    [{ headers: { ...headers, origin: 'https://example.com' } }, 403],
    [{ headers: { ...headers, 'content-type': 'text/plain' } }, 415],
    [{ headers: { ...headers, 'content-length': '20001' } }, 413],
    [{ body: { ...enquiry, extra: 'é'.repeat(11000) } }, 413],
    [{ body: '{' }, 400],
    [{ body: { ...enquiry, email: 'invalid' } }, 400],
    [{ body: { ...enquiry, website: 'filled' } }, 400],
  ];
  for (const [request, status] of cases) assert.equal((await invoke(handler, request)).code, status);
});

test('handles missing configuration, provider rejection and timeouts generically', async () => {
  const logs = [];
  const log = { warn: (...event) => logs.push(event) };
  const unavailable = createContactHandler({ env: { EMAILJS_CONFIG: '{' }, log });
  assert.equal((await invoke(unavailable)).code, 503);
  const rejected = createContactHandler({ env: config, log, deliver: async () => ({ accepted: false, status: 403 }) });
  assert.deepEqual((await invoke(rejected)).body, { error: 'delivery' });
  const timedOut = createContactHandler({ env: config, log, deliver: async () => { throw new Error(enquiry.email); } });
  assert.equal((await invoke(timedOut)).code, 502);
  assert.deepEqual(logs, [
    ['contact.delivery_unconfigured'],
    ['contact.provider_rejected', { status: 403 }],
    ['contact.provider_unavailable'],
  ]);
});

test('delivers validated data with a fixed recipient and no redirects', async () => {
  const env = { EMAILJS_CONFIG: JSON.stringify({ ...config, privateKey: 'test-key' }) };
  const handler = createContactHandler({
    env,
    deliver: (fields, settings) => deliverEnquiry(fields, settings, async (url, options) => {
      const payload = JSON.parse(options.body);
      assert.equal(url, 'https://api.emailjs.com/api/v1.0/email/send');
      assert.equal(options.redirect, 'error');
      assert.equal(payload.template_params.to_email, 'info@fangys.hk');
      assert.equal(payload.template_params.reply_to, enquiry.email);
      assert.equal(payload.accessToken, 'test-key');
      return { ok: true, status: 200 };
    }),
  });
  assert.deepEqual((await invoke(handler, { body: { ...enquiry, to_email: 'other@example.com' } })).body, { accepted: true });
  assert.equal(readEmailConfig(config).serviceId, 'service');
});
