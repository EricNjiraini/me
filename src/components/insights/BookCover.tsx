import CoverArt from '@/components/insights/CoverArt';
import { coverTones } from '@/lib/covers';
import { insightTypes, type Insight } from '@/lib/insights';
import { profile } from '@/lib/profile';
import { cn } from '@/lib/utils';

interface BookCoverProps {
  insight: Insight;
  // Thumbnail without a title, for cards that show the title next to it.
  compact?: boolean;
  // Hide from screen readers when the surrounding link or heading already names the piece.
  decorative?: boolean;
  className?: string;
}

// Each piece has its own colour and artwork (`tone` and `motif` in its front matter).
const BookCover = ({ insight, compact = false, decorative = compact, className }: BookCoverProps) => (
  <div
    aria-hidden={decorative || undefined}
    className={cn('relative aspect-[3/4] overflow-hidden rounded-l-sm rounded-r-lg text-white shadow-lg select-none', className)}
    style={{ backgroundColor: coverTones[insight.tone] }}
  >
    {/* Light from the top left and a darker foot give the cover some depth */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30" />
    {/* Spine */}
    <div className="absolute inset-y-0 left-0 w-2.5 bg-black/25 border-r border-white/15" />

    {compact ? (
      <div className="absolute inset-y-0 left-2.5 right-0 flex items-center p-2">
        <CoverArt motif={insight.motif} className="w-full opacity-70" />
      </div>
    ) : (
      <>
        {/* Kept faint (at most ~17% white) so the white/90 text stays at WCAG AA over it */}
        <CoverArt motif={insight.motif} className="absolute bottom-10 left-5 right-3 opacity-20" />
        <div className="relative flex h-full flex-col py-4 pl-5 pr-3">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/90">
            {insightTypes[insight.type].label}
          </p>
          <p className="mt-3 text-base font-bold leading-snug line-clamp-5">{insight.title}</p>
          <p className="mt-auto text-xs text-white/90">
            {profile.name} · {insight.date.slice(0, 4)}
          </p>
        </div>
      </>
    )}
  </div>
);

export default BookCover;
