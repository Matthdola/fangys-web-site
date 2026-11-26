import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { renderPages } from './render.mjs';

export function buildSite({ outputDir = new URL('./', import.meta.url), siteUrl = null } = {}) {
  const folder = outputDir instanceof URL ? outputDir : pathToFileURL(resolve(outputDir) + '/');
  for (const { path, html } of renderPages(siteUrl)) {
    const destination = fileURLToPath(new URL(path, folder));
    mkdirSync(dirname(destination), { recursive: true });
    writeFileSync(destination, html);
  }
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const siteUrl = process.env.FANGYS_SITE_URL?.replace(/\/?$/, '/') ?? null;
  buildSite({ outputDir: process.env.FANGYS_OUTPUT_DIR, siteUrl });
}
