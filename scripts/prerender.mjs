// Injects server-rendered HTML into the built pages (runs after `vite build` + the SSR build).
// dist/index.html            -> the home page
// dist/insights.html         -> the Insights library, served at /insights (cleanUrls in vercel.json)
// dist/insights/<slug>.html  -> one page per insight, with its own <head>
// dist/404.html              -> served by Vercel with a real 404 status for unknown URLs
// It also writes dist/sitemap.xml and the RSS feed, dist/insights/feed.xml.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, insights, insightTypes, describeLibrary, pageTitle, siteUrl } = await import(
  pathToFileURL(path.join(root, 'dist-server', 'entry-server.js')).href
);

const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) throw new Error(`prerender: ${placeholder} not found in dist/index.html`);

// For HTML attributes and XML text.
const escape = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const absolute = (url) => (/^https?:\/\//.test(url) ? url : `${siteUrl}${url.startsWith('/') ? '' : '/'}${url}`);

// Replaces one tag in index.html's <head>. Each must appear exactly once, so a tag renamed in
// index.html fails the build rather than shipping a page with the home page's metadata.
const swap = (html, pattern, replacement) => {
  const count = html.match(new RegExp(pattern.source, 'g'))?.length ?? 0;
  if (count !== 1) throw new Error(`prerender: expected one match for ${pattern} in dist/index.html, found ${count}`);
  return html.replace(pattern, () => replacement);
};
const meta = (attr, key) => new RegExp(`<meta ${attr}="${key}" content="[^"]*" />`);

// Title, description, canonical URL, Open Graph and Twitter tags for one page.
const withHead = (html, { title, description, url, type = 'article', image, jsonLd }) => {
  const t = escape(title);
  const d = escape(description);
  const u = escape(absolute(url));
  let out = html;
  out = swap(out, /<title>[^<]*<\/title>/, `<title>${escape(pageTitle(title))}</title>`);
  out = swap(out, meta('name', 'description'), `<meta name="description" content="${d}" />`);
  out = swap(out, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${u}" />`);
  out = swap(out, meta('property', 'og:title'), `<meta property="og:title" content="${t}" />`);
  out = swap(out, meta('property', 'og:description'), `<meta property="og:description" content="${d}" />`);
  out = swap(out, meta('property', 'og:type'), `<meta property="og:type" content="${type}" />`);
  out = swap(out, meta('property', 'og:url'), `<meta property="og:url" content="${u}" />`);
  out = swap(out, meta('name', 'twitter:title'), `<meta name="twitter:title" content="${t}" />`);
  out = swap(out, meta('name', 'twitter:description'), `<meta name="twitter:description" content="${d}" />`);
  if (image) {
    const i = escape(absolute(image));
    out = swap(out, meta('property', 'og:image'), `<meta property="og:image" content="${i}" />`);
    out = swap(out, meta('name', 'twitter:image'), `<meta name="twitter:image" content="${i}" />`);
    out = swap(out, meta('property', 'og:image:alt'), `<meta property="og:image:alt" content="${t}" />`);
    // The default image's dimensions don't apply to a custom one
    out = swap(out, /\s*<meta property="og:image:width" content="[^"]*" \/>/, '');
    out = swap(out, /\s*<meta property="og:image:height" content="[^"]*" \/>/, '');
  }
  if (jsonLd) {
    const json = JSON.stringify(jsonLd).replace(/</g, '\\u003c');
    out = swap(out, /<\/head>/, `  <script type="application/ld+json">${json}</script>\n  </head>`);
  }
  return out;
};

const insightUrl = (insight) => `/insights/${insight.slug}`;
const libraryDescription = `Case studies, articles, reports and projects on data strategy, analytics and AI by Eric Njiraini, Data Analytics Manager in Nairobi. ${describeLibrary()} so far.`;

const pages = [
  { url: '/', file: 'index.html' },
  {
    url: '/404',
    file: '404.html',
    head: (html) =>
      swap(
        swap(html, /<title>[^<]*<\/title>/, `<title>${escape(pageTitle('Page not found'))}</title>`),
        meta('name', 'robots'),
        '<meta name="robots" content="noindex" />'
      ),
  },
  {
    url: '/insights',
    file: 'insights.html',
    head: (html) =>
      withHead(html, { title: 'Insights', description: libraryDescription, url: '/insights', type: 'website' }),
  },
  ...insights.map((insight) => ({
    url: insightUrl(insight),
    file: `insights/${insight.slug}.html`,
    head: (html) =>
      withHead(html, {
        title: insight.title,
        description: insight.summary,
        url: insightUrl(insight),
        image: insight.image,
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: insight.title,
          description: insight.summary,
          articleSection: insightTypes[insight.type].label,
          keywords: insight.tags.join(', '),
          datePublished: insight.date,
          dateModified: insight.updated ?? insight.date,
          url: absolute(insightUrl(insight)),
          mainEntityOfPage: absolute(insightUrl(insight)),
          image: absolute(insight.image ?? '/og-image.png'),
          author: { '@type': 'Person', name: 'Eric Njiraini', url: `${siteUrl}/` },
        },
      }),
  })),
];

const write = (file, content) => {
  const target = path.join(dist, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content);
};

for (const page of pages) {
  const shell = page.head ? page.head(template) : template;
  const html = shell.replace(placeholder, () => `<div id="root">${render(page.url)}</div>`);
  write(page.file, html);
  console.log(`prerendered ${page.url} -> dist/${page.file} (${Math.round(html.length / 1024)} KB)`);
}

// Sitemap: every prerendered page except the 404.
const today = new Date().toISOString().slice(0, 10);
const lastChanged = (insight) => insight.updated ?? insight.date;
const sitemapEntries = [
  { url: '/', lastmod: today },
  { url: '/insights', lastmod: insights.map(lastChanged).sort().at(-1) ?? today },
  ...insights.map((insight) => ({ url: insightUrl(insight), lastmod: lastChanged(insight) })),
];
write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(({ url, lastmod }) => `  <url>\n    <loc>${escape(absolute(url))}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
  .join('\n')}
</urlset>
`
);
console.log(`wrote dist/sitemap.xml (${sitemapEntries.length} URLs)`);

// RSS 2.0 feed, newest first.
const rfc822 = (date) => new Date(`${date}T00:00:00Z`).toUTCString();
write(
  'insights/feed.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Eric Njiraini — Insights</title>
    <link>${siteUrl}/insights</link>
    <atom:link href="${siteUrl}/insights/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escape(libraryDescription)}</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${insights
  .map(
    (insight) => `    <item>
      <title>${escape(insight.title)}</title>
      <link>${escape(absolute(insightUrl(insight)))}</link>
      <guid isPermaLink="true">${escape(absolute(insightUrl(insight)))}</guid>
      <pubDate>${rfc822(insight.date)}</pubDate>
      <category>${escape(insightTypes[insight.type].label)}</category>
      <description>${escape(insight.summary)}</description>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>
`
);
console.log(`wrote dist/insights/feed.xml (${insights.length} items)`);
