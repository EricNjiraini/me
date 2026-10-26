// Cover colours and artwork for insights, set per piece with `tone` and `motif` in its
// front matter. Shared by scripts/insights-plugin.ts (which validates them) and BookCover.
// Every tone keeps white/90 text at WCAG AA, even where text overlaps the artwork.
export const coverTones = {
  emerald: 'hsl(160 84% 19%)',
  forest: 'hsl(140 45% 21%)',
  ocean: 'hsl(199 70% 24%)',
  navy: 'hsl(222 47% 20%)',
  indigo: 'hsl(238 38% 34%)',
  plum: 'hsl(280 32% 32%)',
  wine: 'hsl(345 45% 30%)',
  rust: 'hsl(14 62% 29%)',
  slate: 'hsl(215 25% 30%)',
} as const;

// Drawn in src/components/insights/CoverArt.tsx
export const coverMotifs = ['heatmap', 'map', 'funnel', 'scatter', 'kpi', 'flow', 'stacked', 'trend'] as const;

export type CoverTone = keyof typeof coverTones;
export type CoverMotif = (typeof coverMotifs)[number];
