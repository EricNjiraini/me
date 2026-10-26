// The Insights library: one Markdown file per piece in src/content/insights/, compiled to
// HTML at build time by scripts/insights-plugin.ts. To publish, copy _template.md.
import type { CoverMotif, CoverTone } from './covers';

export const insightTypes = {
  'case-study': { label: 'Case study', plural: 'Case studies' },
  article: { label: 'Article', plural: 'Articles' },
  report: { label: 'Report', plural: 'Reports' },
  project: { label: 'Project', plural: 'Projects' },
} as const;

export type InsightType = keyof typeof insightTypes;

export interface InsightLink {
  label: string;
  url: string;
}

export interface Insight {
  slug: string;
  title: string;
  type: InsightType;
  date: string; // YYYY-MM-DD
  updated?: string;
  summary: string;
  tags: string[];
  links: InsightLink[];
  image?: string;
  tone: CoverTone;
  motif: CoverMotif;
  featured: boolean;
  draft: boolean;
  readingTime: number; // minutes
  headings: { id: string; text: string }[]; // the body's h2s, for "On this page"
  html: string;
}

const files = import.meta.glob<Insight>(['../content/insights/*.md', '!../content/insights/_*.md'], {
  eager: true,
  import: 'default',
});

// Newest first. Drafts show in `npm run dev` only.
export const insights: Insight[] = Object.values(files)
  .filter((insight) => import.meta.env.DEV || !insight.draft)
  .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

export const isInsightType = (value: string | null): value is InsightType =>
  value !== null && Object.keys(insightTypes).includes(value);

export const insightPath = (slug: string) => `/insights/${slug}`;

export const getInsight = (slug: string) => insights.find((insight) => insight.slug === slug);

// Homepage shelf: featured pieces first, topped up with the latest of the rest.
export const shelfInsights = (count = 6) =>
  [...insights.filter((insight) => insight.featured), ...insights.filter((insight) => !insight.featured)].slice(0, count);

// Most shared tags first, then same type; ties keep the newest-first order.
export const relatedInsights = (insight: Insight, count = 3) => {
  const score = (other: Insight) =>
    other.tags.filter((tag) => insight.tags.includes(tag)).length * 2 + (other.type === insight.type ? 1 : 0);
  return insights
    .filter((other) => other.slug !== insight.slug)
    .sort((a, b) => score(b) - score(a))
    .slice(0, count);
};

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// Formatted by hand: Intl's month names differ between ICU versions ("Sep" vs "Sept"),
// which would make the prerendered HTML disagree with the browser and break hydration.
export const formatInsightDate = (date: string, short = false) => {
  const [year, month, day] = date.split('-').map(Number);
  const name = MONTHS[month - 1];
  return `${day} ${short ? name.slice(0, 3) : name} ${year}`;
};

// "2 case studies, 1 article and 8 projects", in the order of insightTypes.
export const describeLibrary = (list: Insight[] = insights) => {
  const parts = (Object.keys(insightTypes) as InsightType[])
    .map((type) => ({ type, count: list.filter((insight) => insight.type === type).length }))
    .filter(({ count }) => count > 0)
    .map(({ type, count }) => `${count} ${(count === 1 ? insightTypes[type].label : insightTypes[type].plural).toLowerCase()}`);
  if (parts.length < 2) return parts[0] ?? 'Nothing published yet';
  return `${parts.slice(0, -1).join(', ')} and ${parts[parts.length - 1]}`;
};
