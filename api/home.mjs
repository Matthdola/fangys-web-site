const supported = new Set(['en', 'fr', 'ar', 'es', 'de']);

export function selectLocale(header = '') {
  const preferences = header.split(',').map((entry) => {
    const [tag, ...params] = entry.trim().toLowerCase().split(';');
    const quality = params.map((param) => param.trim()).find((param) => param.startsWith('q='));
    return { tag, weight: quality ? Number(quality.slice(2)) : 1 };
  }).filter(({ weight }) => weight > 0 && weight <= 1).sort((a, b) => b.weight - a.weight);

  for (const { tag } of preferences) {
    if (tag === '*') return 'en';
    const base = tag.split('-')[0];
    if (base === 'zh' || base === 'cmn') return 'zh-Hans';
    if (supported.has(base)) return base;
  }
  return 'en';
}

export default function home(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    return res.status(405).end();
  }
  res.setHeader('Cache-Control', 'private, no-store');
  res.setHeader('Vary', 'Accept-Language');
  const language = req.headers['accept-language'];
  const locale = selectLocale(typeof language === 'string' ? language : '');
  return res.redirect(307, `/${locale}/index.html`);
}
