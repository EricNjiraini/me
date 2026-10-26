// Vite plugin: compiles src/content/insights/*.md into JS modules at build time, so the
// browser receives ready-made HTML and never loads a Markdown or YAML parser.
// The front matter fields are documented in src/content/insights/_template.md.
import path from 'node:path';
import { Marked } from 'marked';
import { parse as parseYaml } from 'yaml';
import type { Plugin } from 'vite';

const TYPES = ['case-study', 'article', 'report', 'project']; // keep in sync with insightTypes in src/lib/insights.ts
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

const marked = new Marked({ gfm: true, async: false });

export default function insightsMarkdown(): Plugin {
  return {
    name: 'insights-markdown',
    transform(source, id) {
      const file = id.split('?')[0];
      if (!file.endsWith('.md') || !file.includes('/src/content/insights/')) return null;

      const slug = path.basename(file, '.md');
      const fail = (message: string): never => this.error(`${slug}.md: ${message}`);

      const [, frontMatter, body] = source.match(FRONT_MATTER) ?? fail('missing front matter (a --- block at the top)');
      const meta: Record<string, unknown> = parseYaml(frontMatter) ?? {};

      const text = (key: string) => {
        const value = meta[key];
        return typeof value === 'string' && value.trim() ? value.trim() : fail(`"${key}" is required`);
      };
      const optionalDate = (key: string) => {
        const value = meta[key];
        if (value == null) return undefined;
        return typeof value === 'string' && DATE.test(value) ? value : fail(`"${key}" must be a date like 2026-01-31`);
      };

      const type = text('type');
      if (!TYPES.includes(type)) fail(`"type" must be one of: ${TYPES.join(', ')}`);

      const date = text('date');
      if (!DATE.test(date)) fail('"date" must be a date like 2026-01-31');

      const tags = meta.tags ?? [];
      if (!Array.isArray(tags)) fail('"tags" must be a list, e.g. [Python, Power BI]');

      const links = meta.links ?? [];
      if (!Array.isArray(links) || links.some((link) => typeof link?.label !== 'string' || typeof link?.url !== 'string')) {
        fail('"links" must be a list of items with a label and a url');
      }

      const html = (marked.parse(body) as string)
        // External links open in a new tab; images load lazily; wide tables scroll on phones.
        .replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"')
        .replace(/<img /g, '<img loading="lazy" ')
        .replace(/<table>/g, '<div class="table-scroll"><table>')
        .replace(/<\/table>/g, '</table></div>');

      const words = body.split(/\s+/).filter(Boolean).length;

      const insight = {
        slug,
        title: text('title'),
        type,
        date,
        updated: optionalDate('updated'),
        summary: text('summary'),
        tags: tags.map(String),
        links,
        image: typeof meta.image === 'string' ? meta.image : undefined,
        featured: meta.featured === true,
        draft: meta.draft === true,
        readingTime: Math.max(1, Math.round(words / 220)),
        html,
      };

      return { code: `export default ${JSON.stringify(insight)};`, map: null };
    },
  };
}
