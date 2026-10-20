/**
 * Post-build step (runs automatically via `npm run build`).
 *
 * 1. Writes a real HTML file for every route (dist/about/index.html, ...), each with
 *    its own <title>, meta description and (optionally) canonical URL.
 *    -> Better SEO, and a refresh or shared deep link on GitHub Pages never gives a 404.
 * 2. Generates sitemap.xml when SITE_URL is provided.
 */
import fs from 'node:fs';
import path from 'node:path';
import { routes } from '../src/data/routes.js';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const dist = path.join(root, 'dist');

function readEnvFile() {
  const out = {};
  for (const f of ['.env', '.env.local']) {
    const p = path.join(root, f);
    if (!fs.existsSync(p)) continue;
    for (const line of fs.readFileSync(p, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
  return out;
}
const SITE_URL = (process.env.SITE_URL || readEnvFile().SITE_URL || '').replace(/\/+$/, '');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

function render(route) {
  const depth = route.path === '/' ? 0 : route.path.split('/').filter(Boolean).length;
  let html = template
    .replace(/<title>.*?<\/title>/s, `<title>${esc(route.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(route.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(route.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(route.description)}$2`);

  if (SITE_URL) {
    const url = SITE_URL + (route.path === '/' ? '/' : route.path + '/');
    html = html.replace(
      '</head>',
      `  <link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />\n  </head>`
    );
  }
  if (depth > 0) {
    // assets are emitted with relative URLs ("./assets/..."); fix them for nested folders
    html = html.replace(/(href|src)="\.\//g, `$1="${'../'.repeat(depth)}`);
  }
  return html;
}

for (const route of routes) {
  const html = render(route);
  const dir = route.path === '/' ? dist : path.join(dist, route.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}
console.log(`Pre-rendered ${routes.length} pages.`);

if (SITE_URL) {
  const urls = routes
    .map((r) => `  <url><loc>${SITE_URL}${r.path === '/' ? '/' : r.path + '/'}</loc></url>`)
    .join('\n');
  fs.writeFileSync(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );
  fs.appendFileSync(path.join(dist, 'robots.txt'), `\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  console.log('Generated sitemap.xml');
} else {
  console.log('Tip: set SITE_URL in .env to generate sitemap.xml and canonical tags.');
}
