const endpoint = 'https://api.emailjs.com/api/v1.0/email/send';
const recipient = 'info@fangys.hk';

export function readEmailConfig(env) {
  let config;
  try {
    config = env.EMAILJS_CONFIG ? JSON.parse(env.EMAILJS_CONFIG) : env;
  } catch {
    return null;
  }

  const { serviceId, templateId, publicKey, privateKey } = config ?? {};
  const required = [serviceId, templateId, publicKey];
  const valid = (value) => typeof value === 'string' && value.trim().length > 0;
  if (!required.every(valid) || (privateKey != null && !valid(privateKey))) return null;

  return {
    serviceId: serviceId.trim(),
    templateId: templateId.trim(),
    publicKey: publicKey.trim(),
    privateKey: privateKey?.trim(),
  };
}

export async function deliverEnquiry(enquiry, config, request = fetch) {
  const response = await request(endpoint, {
    method: 'POST',
    redirect: 'error',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      ...(config.privateKey ? { accessToken: config.privateKey } : {}),
      template_params: {
        to_email: recipient,
        from_name: enquiry.name,
        reply_to: enquiry.email,
        organisation: enquiry.organisation,
        subject: enquiry.subject,
        message: enquiry.message,
      },
    }),
    signal: AbortSignal.timeout(8000),
  });
  return { accepted: response.ok, status: response.status };
}
