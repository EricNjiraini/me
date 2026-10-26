import { formatInsightDate, insightTypes, type Insight } from '@/lib/insights';
import { cn } from '@/lib/utils';

// "Project · 12 April 2026 · 4 min read" (short: "12 Apr 2026", for narrow cards)
const InsightMeta = ({ insight, short = false, className }: { insight: Insight; short?: boolean; className?: string }) => (
  <p className={cn('flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground', className)}>
    <span className="font-semibold text-primary">{insightTypes[insight.type].label}</span>
    <span aria-hidden="true">·</span>
    <time dateTime={insight.date}>{formatInsightDate(insight.date, short)}</time>
    <span aria-hidden="true">·</span>
    <span>{insight.readingTime} min read</span>
  </p>
);

export default InsightMeta;
