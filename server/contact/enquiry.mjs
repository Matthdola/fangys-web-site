const subjects = new Set(['business', 'partnership', 'other']);
const emailPattern = /^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/;

function boundedText(value, limit, required = true) {
  if (typeof value !== 'string' || value.length > limit || /\u0000/.test(value)) return null;
  const normalized = value.trim();
  return required && !normalized ? null : normalized;
}

export function validateEnquiry(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return null;
  const { name, email, organisation, subject, message, website } = input;
  if (website || !subjects.has(subject)) return null;

  const safeName = boundedText(name, 120);
  const safeEmail = boundedText(email, 254);
  const safeOrganisation = boundedText(organisation, 160, false);
  const safeMessage = boundedText(message, 4000);
  if (!safeName || !safeEmail || !emailPattern.test(safeEmail) || safeOrganisation === null || !safeMessage) return null;

  return { name: safeName, email: safeEmail, organisation: safeOrganisation, subject, message: safeMessage };
}
