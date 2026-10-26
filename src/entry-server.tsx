// Build-time renderer used by scripts/prerender.mjs to write real HTML into dist/,
// so crawlers that don't run JavaScript (Bing, LinkedIn, AI search) still see the content.
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes } from './App';

// The prerender also needs the content and page titles, to write each page's <head>,
// the sitemap and the RSS feed.
export { describeLibrary, insights, insightTypes } from './lib/insights';
export { pageTitle, siteUrl } from './lib/profile';

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
}
