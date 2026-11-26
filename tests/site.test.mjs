import assert from 'node:assert/strict';
import test from 'node:test';
import { selectLocale } from '../api/home.mjs';
import { renderPages } from '../maquette/render.mjs';
import { routes } from '../maquette/site-content.mjs';

test('homepage selects supported languages and defaults to English', () => {
  for (const [header, expected] of [
    ['', 'en'], ['ja-JP', 'en'], ['zh-CN', 'zh-Hans'], ['ar-MA', 'ar'],
    ['en;q=0.3,de;q=0.9', 'de'], ['es-MX', 'es'], ['fr-CA', 'fr'],
  ]) assert.equal(selectLocale(header), expected);
});

test('localized output retains canonical links, alternates and organization data', () => {
  const baseUrl = 'https://fangys.hk/';
  const pages = new Map([...renderPages(baseUrl)].map(({ path, html }) => [path, html]));
  assert.equal(pages.size, 90);
  for (const [locale, files] of Object.entries(routes)) {
    files.forEach((file, index) => {
      const path = `${locale}/${file}`;
      const html = pages.get(path);
      assert.ok(html.includes(`rel="canonical" href="${baseUrl}${path}"`));
      for (const [alternate, alternateFiles] of Object.entries(routes)) {
        assert.ok(html.includes(`hreflang="${alternate}" href="${baseUrl}${alternate}/${alternateFiles[index]}"`));
      }
      if (index === 0) assert.ok(html.includes(`"url":"${baseUrl}"`));
    });
  }
});
