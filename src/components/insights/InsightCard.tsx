import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import BookCover from '@/components/insights/BookCover';
import InsightMeta from '@/components/insights/InsightMeta';
import { insightPath, type Insight } from '@/lib/insights';

interface InsightCardProps {
  insight: Insight;
  headingLevel?: 'h2' | 'h3';
}

// The title link stretches over the whole card, so the card is one tap target.
const InsightCard = ({ insight, headingLevel: Heading = 'h2' }: InsightCardProps) => (
  <article className="group relative flex gap-4 sm:gap-5 rounded-xl border border-border bg-card p-4 sm:p-5 transition-shadow hover:shadow-card">
    <BookCover insight={insight} compact className="w-16 sm:w-20 shrink-0 self-start" />

    <div className="min-w-0 flex-1">
      <InsightMeta insight={insight} short className="text-xs" />
      <Heading className="mt-1.5 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
        <Link
          to={insightPath(insight.slug)}
          className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring"
        >
          {insight.title}
        </Link>
      </Heading>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{insight.summary}</p>
      {insight.tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
          {insight.tags.slice(0, 3).map((tag) => (
            <li key={tag}>
              <Badge variant="secondary" className="text-xs font-medium">{tag}</Badge>
            </li>
          ))}
        </ul>
      )}
    </div>
  </article>
);

export default InsightCard;
