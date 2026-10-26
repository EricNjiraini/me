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
import { formatInsightDate, getInsight, relatedInsights } from '@/lib/insights';
import NotFound from './NotFound';

const linkIcon = (url: string) =>
  url.includes('github.com') ? Github : /\.pdf($|[?#])/i.test(url) ? Download : ExternalLink;

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
      <main className="flex-1 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All insights
          </Link>

          <article>
            <header className="mt-4 flex items-start gap-8">
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
              <BookCover insight={insight} decorative className="hidden sm:block w-36 md:w-44 shrink-0 rotate-2" />
            </header>

            {insight.tags.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tags">
                {insight.tags.map((tag) => (
                  <li key={tag}>
                    <Badge variant="secondary">{tag}</Badge>
                  </li>
                ))}
              </ul>
            )}

            {insight.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {insight.links.map((link, i) => {
                  const Icon = linkIcon(link.url);
                  return (
                    <Button key={link.url} asChild variant={i === 0 ? 'default' : 'outline'} className="flex-1 sm:flex-none">
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <Icon /> {link.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
            )}

            {/* Compiled from Markdown at build time (scripts/insights-plugin.ts), so it's our own HTML */}
            <div
              className="prose prose-slate sm:prose-lg max-w-none mt-10 border-t border-border pt-8 prose-headings:text-foreground prose-a:text-primary prose-a:font-medium prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: insight.html }}
            />
          </article>

          <AuthorCard className="mt-12" />

          {related.length > 0 && (
            <section className="mt-14" aria-labelledby="related-heading">
              <h2 id="related-heading" className="text-2xl font-bold text-foreground mb-5">More insights</h2>
              <div className="grid gap-4">
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
