import { BookOpen, Briefcase, Code2, FileText, type LucideIcon } from 'lucide-react';
import { insightTypes, type Insight, type InsightType } from '@/lib/insights';
import { profile } from '@/lib/profile';
import { cn } from '@/lib/utils';

// One deep tone per type, dark enough for white text (and white/80) to pass WCAG AA.
const covers: Record<InsightType, { tone: string; icon: LucideIcon }> = {
  'case-study': { tone: 'hsl(160 84% 22%)', icon: Briefcase },
  article: { tone: 'hsl(222 47% 18%)', icon: BookOpen },
  report: { tone: 'hsl(199 70% 24%)', icon: FileText },
  project: { tone: 'hsl(215 25% 30%)', icon: Code2 },
};

interface BookCoverProps {
  insight: Insight;
  // Thumbnail without a title, for cards that show the title next to it.
  compact?: boolean;
  // Hide from screen readers when the surrounding link or heading already names the piece.
  decorative?: boolean;
  className?: string;
}

const BookCover = ({ insight, compact = false, decorative = compact, className }: BookCoverProps) => {
  const { tone, icon: Icon } = covers[insight.type];

  return (
    <div
      aria-hidden={decorative || undefined}
      className={cn('relative aspect-[3/4] overflow-hidden rounded-l-sm rounded-r-lg text-white shadow-lg select-none', className)}
      style={{ backgroundColor: tone }}
    >
      {/* Light from the top left and a darker foot give the cover some depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30" />
      {/* Spine */}
      <div className="absolute inset-y-0 left-0 w-2.5 bg-black/25 border-r border-white/15" />

      {compact ? (
        <Icon className="absolute inset-0 m-auto h-1/3 w-1/3 pl-1 text-white/80" strokeWidth={1.5} />
      ) : (
        <>
          <Icon className="absolute -bottom-4 -right-4 h-24 w-24 text-white/10" strokeWidth={1.25} />
          <div className="relative flex h-full flex-col py-4 pl-5 pr-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/80">
              {insightTypes[insight.type].label}
            </p>
            <p className="mt-3 text-base lg:text-lg font-bold leading-snug line-clamp-6">{insight.title}</p>
            <p className="mt-auto text-xs text-white/80">
              {profile.name} · {insight.date.slice(0, 4)}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default BookCover;
