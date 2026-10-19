// Build-time renderer used by scripts/prerender.mjs to write real HTML into dist/,
// so crawlers that don't run JavaScript (Bing, LinkedIn, AI search) still see the content.
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes } from './App';

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
}
