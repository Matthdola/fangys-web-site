import { cpSync, mkdirSync, writeFileSync } from 'node:fs';
import { buildSite } from './maquette/build.mjs';
import { routes } from './maquette/site-content.mjs';

const output = new URL('./dist/', import.meta.url);
const siteUrl = 'https://fangys.hk/';
buildSite({ outputDir: output, siteUrl });

mkdirSync(output, { recursive: true });
const assets = ['style.css', 'interactions.js', 'favicon.png', 'fangys-logo.jpg', 'FangysLogo_sans_bg.png', 'victoria-harbour.jpg', 'images'];
for (const asset of assets) {
  cpSync(new URL(`./maquette/${asset}`, import.meta.url), new URL(asset, output), { recursive: true });
}

const urls = Object.entries(routes).flatMap(([locale, pages]) =>
  pages.map((page) => `  <url><loc>${new URL(`${locale}/${page}`, siteUrl)}</loc></url>`),
);
writeFileSync(new URL('sitemap.xml', output), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`);
writeFileSync(new URL('robots.txt', output), `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', siteUrl)}\n`);
