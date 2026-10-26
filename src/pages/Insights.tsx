import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import AuthorCard from '@/components/insights/AuthorCard';
import InsightCard from '@/components/insights/InsightCard';
import { usePageTitle } from '@/hooks/use-page-title';
import { describeLibrary, insights, insightTypes, isInsightType, type InsightType } from '@/lib/insights';
import { profile } from '@/lib/profile';
import { cn } from '@/lib/utils';

// Filter chips only for types that have something published.
const presentTypes = (Object.keys(insightTypes) as InsightType[]).filter((type) =>
  insights.some((insight) => insight.type === type)
);

const Insights = () => {
  usePageTitle('Insights');
  const [searchParams, setSearchParams] = useSearchParams();

  // The prerendered page lists everything, so ?type= is applied only after hydration.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const param = searchParams.get('type');
  const filter = mounted && isInsightType(param) && presentTypes.includes(param) ? param : null;
  const shown = filter ? insights.filter((insight) => insight.type === filter) : insights;

  const choose = (type: InsightType | null) => setSearchParams(type ? { type } : {}, { replace: true });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-subtle pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Insights</h1>
          <div className="w-24 h-1 bg-gradient-primary mt-5 mb-6" />
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
            Case studies, articles, reports and projects on data strategy, analytics and AI, by {profile.name}.
            {insights.length > 0 && ` ${describeLibrary()} so far, newest first.`}
          </p>

          {presentTypes.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by type">
              {[null, ...presentTypes].map((type) => (
                <button
                  key={type ?? 'all'}
                  type="button"
                  aria-pressed={filter === type}
                  onClick={() => choose(type)}
                  className={cn(
                    'rounded-full border px-4 py-2.5 text-sm font-medium leading-none transition-colors',
                    filter === type
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-card text-foreground hover:border-primary/50 hover:text-primary'
                  )}
                >
                  {type ? insightTypes[type].plural : 'All'}
                </button>
              ))}
            </div>
          )}

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
            {shown.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>

          <AuthorCard className="mt-12" />

          <div className="mt-8 text-center">
            <Button asChild variant="ghost" size="lg" className="hover:text-primary">
              <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer">
                All repositories on GitHub <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
