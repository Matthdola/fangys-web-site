import { validateEnquiry } from '../server/contact/enquiry.mjs';
import { deliverEnquiry, readEmailConfig } from '../server/contact/emailjs.mjs';

const allowedOrigins = new Set(['https://fangys.hk', 'https://www.fangys.hk']);
const maxBodyBytes = 20_000;

function parsePayload(body) {
  try {
    const serialized = typeof body === 'string' ? body : JSON.stringify(body);
    if (typeof serialized !== 'string') return { error: 'invalid', status: 400 };
    if (Buffer.byteLength(serialized, 'utf8') > maxBodyBytes) return { error: 'size', status: 413 };
    return { value: JSON.parse(serialized) };
  } catch {
    return { error: 'invalid', status: 400 };
  }
}

export function createContactHandler({
  env = process.env,
  deliver = deliverEnquiry,
  log = console,
} = {}) {
  return async function contact(req, res) {
    const reject = (status, error) => res.status(status).json({ error });
    res.setHeader('Cache-Control', 'no-store');

    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return reject(405, 'method');
    }
    if (!allowedOrigins.has(req.headers.origin)) return reject(403, 'origin');

    const mediaType = String(req.headers['content-type'] ?? '').split(';')[0].trim().toLowerCase();
    if (mediaType !== 'application/json') return reject(415, 'media_type');
    if (Number(req.headers['content-length']) > maxBodyBytes) return reject(413, 'size');

    const payload = parsePayload(req.body);
    if (payload.error) return reject(payload.status, payload.error);
    const enquiry = validateEnquiry(payload.value);
    if (!enquiry) return reject(400, 'invalid');

    const config = readEmailConfig(env);
    if (!config) {
      log.warn('contact.delivery_unconfigured');
      return reject(503, 'unavailable');
    }

    try {
      const delivery = await deliver(enquiry, config);
      if (delivery.accepted) return res.status(200).json({ accepted: true });
      log.warn('contact.provider_rejected', { status: delivery.status });
    } catch {
      log.warn('contact.provider_unavailable');
    }
    return reject(502, 'delivery');
  };
}

export default createContactHandler();
