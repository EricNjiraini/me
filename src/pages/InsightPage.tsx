import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink, Github } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AuthorCard from '@/components/insights/AuthorCard';
import BookCover from '@/components/insights/BookCover';
import InsightCard from '@/components/insights/InsightCard';
import InsightMeta from '@/components/insights/InsightMeta';
import { usePageTitle } from '@/hooks/use-page-title';
import { formatInsightDate, getInsight, relatedInsights, type Insight } from '@/lib/insights';
import { cn } from '@/lib/utils';
import NotFound from './NotFound';

const linkIcon = (url: string) =>
  url.includes('github.com') ? Github : /\.pdf($|[?#])/i.test(url) ? Download : ExternalLink;

const PieceLinks = ({ insight, stacked = false }: { insight: Insight; stacked?: boolean }) =>
  insight.links.length === 0 ? null : (
    <div className={cn('flex flex-wrap gap-3', stacked && 'flex-col')}>
      {insight.links.map((link, i) => {
        const Icon = linkIcon(link.url);
        return (
          <Button key={link.url} asChild variant={i === 0 ? 'default' : 'outline'} className={stacked ? 'w-full' : 'flex-1 sm:flex-none'}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <Icon /> {link.label}
            </a>
          </Button>
        );
      })}
    </div>
  );

const PieceTags = ({ insight }: { insight: Insight }) =>
  insight.tags.length === 0 ? null : (
    <ul className="flex flex-wrap gap-2" aria-label="Tags">
      {insight.tags.map((tag) => (
        <li key={tag}>
          <Badge variant="outline" className="bg-card font-medium">{tag}</Badge>
        </li>
      ))}
    </ul>
  );

// "On this page": links to the body's sections, highlighting the one being read.
const Contents = ({ headings }: { headings: Insight['headings'] }) => {
  const [current, setCurrent] = useState('');

  useEffect(() => {
    const onScroll = () => {
      // The last heading to pass under the fixed header is the section being read
      const passed = headings.filter(({ id }) => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= 140);
      setCurrent(passed.length ? passed[passed.length - 1].id : '');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav aria-labelledby="contents-heading" className="sticky top-28">
      <p id="contents-heading" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        On this page
      </p>
      <ul className="mt-3 border-l border-border">
        {headings.map(({ id, text }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={current === id ? 'location' : undefined}
              className={cn(
                '-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors',
                current === id
                  ? 'border-primary font-medium text-primary'
                  : 'border-transparent text-muted-foreground hover:border-primary/50 hover:text-foreground'
              )}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const InsightPage = () => {
  const { slug = '' } = useParams();
  const insight = getInsight(slug);

  // NotFound sets the same title; this effect runs after the child's, so it has to agree.
  usePageTitle(insight?.title ?? 'Page not found');

  if (!insight) return <NotFound />;

  const related = relatedInsights(insight);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All insights
          </Link>

          {/* Wide screens: the article, with a sidebar for the cover, links, tags and contents */}
          <div className="mt-4 lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-20">
            <article className="min-w-0">
              <header className="flex items-start gap-8">
                <div className="min-w-0 flex-1">
                  <InsightMeta insight={insight} />
                  <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                    {insight.title}
                  </h1>
                  <p className="mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed">{insight.summary}</p>
                  {insight.updated && (
                    <p className="mt-3 text-sm text-muted-foreground">
                      Updated <time dateTime={insight.updated}>{formatInsightDate(insight.updated)}</time>
                    </p>
                  )}
                </div>
                <BookCover insight={insight} decorative className="hidden sm:block lg:hidden w-36 md:w-44 shrink-0 rotate-2" />
              </header>

              <div className="lg:hidden mt-6 space-y-6">
                <PieceTags insight={insight} />
                <PieceLinks insight={insight} />
              </div>

              {/* Compiled from Markdown at build time (scripts/insights-plugin.ts), so it's our own HTML */}
              <div
                className="prose prose-slate sm:prose-lg max-w-none mt-10 border-t border-border pt-8 prose-headings:text-foreground prose-headings:scroll-mt-28 prose-a:text-primary prose-a:font-medium prose-img:rounded-lg"
                dangerouslySetInnerHTML={{ __html: insight.html }}
              />
            </article>

            <aside className="hidden lg:flex flex-col gap-8" aria-label="About this piece">
              <BookCover insight={insight} decorative className="w-44 rotate-2" />
              <PieceLinks insight={insight} stacked />
              <PieceTags insight={insight} />
              <Contents headings={insight.headings} />
            </aside>
          </div>

          <AuthorCard className="mt-14" />

          {related.length > 0 && (
            <section className="mt-14" aria-labelledby="related-heading">
              <h2 id="related-heading" className="text-2xl font-bold text-foreground mb-5">More insights</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {related.map((other) => (
                  <InsightCard key={other.slug} insight={other} headingLevel="h3" />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InsightPage;
