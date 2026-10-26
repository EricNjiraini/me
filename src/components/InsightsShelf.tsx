import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookCover from '@/components/insights/BookCover';
import InsightMeta from '@/components/insights/InsightMeta';
import { insightPath, insights, insightTypes, shelfInsights } from '@/lib/insights';
import { cn } from '@/lib/utils';

const picks = shelfInsights(6);
// Desktop fans the covers out with the newest on the right, next to the panel, so the
// others show their spines and title starts. Phones list newest first.
const shelf = [...picks].reverse();

const InsightsShelf = () => {
  const [active, setActive] = useState(shelf.length - 1);
  const current = shelf[active];

  if (!current) return null;

  return (
    <section id="insights" className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-5 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-foreground">
            Insights
          </h2>

          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />

          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Projects and writing on data strategy, analytics and AI, mostly drawn from clean energy and
            international development.
          </p>
        </motion.div>

        {/* DESKTOP: overlapping covers, with the panel below (md) or beside them (lg+).
            Hovering or focusing a cover brings it to the front. The rest fan out from it
            like a hand of cards (stacked towards the active one), so every cover keeps a
            visible strip. The handlers sit on the <li>, which never moves, so a growing
            cover can't slip out from under the pointer and make the shelf flicker. */}
        <div className="hidden md:flex flex-col items-center lg:flex-row lg:justify-center lg:gap-14 xl:gap-20">
          <ul className="flex shrink-0 pt-4" aria-label="Featured insights">
            {shelf.map((insight, i) => (
              <li
                key={insight.slug}
                className={cn('relative w-40 xl:w-48 shrink-0', i > 0 && '-ml-24 xl:-ml-28')}
                style={{ zIndex: i === active ? 2 * shelf.length : i < active ? i : shelf.length - (i - active) }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <Link
                  to={insightPath(insight.slug)}
                  className={cn(
                    'block origin-bottom rounded-r-lg transition-transform duration-300 ease-out motion-reduce:transition-none',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    i === active && 'scale-[1.06]'
                  )}
                >
                  <BookCover insight={insight} className={cn('transition-shadow', i === active && 'shadow-2xl')} />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 lg:mt-0 w-full max-w-2xl lg:max-w-md min-h-[12rem] lg:min-h-[17rem] flex flex-col justify-center text-center lg:text-left">
            <InsightMeta insight={current} className="justify-center lg:justify-start" />
            <h3 className="mt-2 text-2xl font-bold text-foreground leading-snug">{current.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-3">{current.summary}</p>
            <div>
              <Button asChild variant="link" className="mt-1 px-0 text-base">
                <Link to={insightPath(current.slug)} aria-label={`Read: ${current.title}`}>
                  Read the {insightTypes[current.type].label.toLowerCase()} <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* PHONES: a swipeable row of covers, each with its summary */}
        <ul
          className="md:hidden -mx-5 px-5 sm:-mx-6 sm:px-6 scroll-px-5 sm:scroll-px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
          aria-label="Featured insights"
        >
          {picks.map((insight) => (
            <li key={insight.slug} className="w-[11.5rem] shrink-0 snap-start">
              <Link
                to={insightPath(insight.slug)}
                className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <BookCover insight={insight} />
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-4">{insight.summary}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-center mt-8 md:mt-4 lg:mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/insights">
              Browse all {insights.length} insights <ArrowRight />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default InsightsShelf;
