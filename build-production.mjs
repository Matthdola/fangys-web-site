import { cpSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const output = new URL('./dist/', import.meta.url);
process.env.FANGYS_SITE_URL = 'https://fangys.hk/';
process.env.FANGYS_OUTPUT_DIR = fileURLToPath(output);
const { routes } = await import('./maquette/build.mjs');

mkdirSync(output, { recursive: true });
const assets = ['style.css', 'interactions.js', 'favicon.png', 'fangys-logo.jpg', 'victoria-harbour.jpg', 'images'];
for (const asset of assets) {
  cpSync(new URL(`./maquette/${asset}`, import.meta.url), new URL(asset, output), { recursive: true });
}

const urls = Object.entries(routes).flatMap(([locale, pages]) =>
  pages.map((page) => `  <url><loc>https://fangys.hk/${locale}/${page}</loc></url>`),
);
writeFileSync(new URL('sitemap.xml', output), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`);
writeFileSync(new URL('robots.txt', output), 'User-agent: *\nAllow: /\nSitemap: https://fangys.hk/sitemap.xml\n');
