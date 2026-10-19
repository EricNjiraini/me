// Injects server-rendered HTML into the built pages (runs after `vite build` + the SSR build).
// dist/index.html  -> the home page
// dist/404.html    -> served by Vercel with a real 404 status for unknown URLs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render } = await import(pathToFileURL(path.join(root, 'dist-server', 'entry-server.js')).href);

const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) throw new Error(`prerender: ${placeholder} not found in dist/index.html`);

const pages = [
  { url: '/', file: 'index.html' },
  {
    url: '/404',
    file: '404.html',
    head: (html) =>
      html
        .replace(/<title>[^<]*<\/title>/, '<title>Page not found | Eric Njiraini</title>')
        .replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex" />'),
  },
];

for (const page of pages) {
  const shell = page.head ? page.head(template) : template;
  const html = shell.replace(placeholder, `<div id="root">${render(page.url)}</div>`);
  fs.writeFileSync(path.join(dist, page.file), html);
  console.log(`prerendered ${page.url} -> dist/${page.file} (${Math.round(html.length / 1024)} KB)`);
}
