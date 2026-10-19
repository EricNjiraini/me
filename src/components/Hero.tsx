import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import { profile, scrollToSection } from '@/lib/profile';

const tools = ['Power BI', 'SQL', 'Python', 'R', 'Metabase', 'AWS'];

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-gradient-subtle overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />

      <div className="relative z-10 container mx-auto px-5 sm:px-6 pt-24 pb-16 md:pt-28 text-center">
        <div className="animate-fade-in max-w-4xl mx-auto">

          {/* Name + location */}
          <p className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm sm:text-base font-medium text-foreground/80 mb-4">
            <span className="font-semibold text-foreground">{profile.name}</span>
            <span aria-hidden="true" className="text-primary">•</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
              {profile.location}
            </span>
          </p>

          {/* SEO PRIMARY H1 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-5 bg-gradient-primary bg-clip-text text-transparent leading-tight pb-2">
            Data Analytics Manager
          </h1>

          {/* Supporting SEO line */}
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Turning data into business decisions
          </p>

          {/* Tool stack */}
          <ul className="flex flex-wrap justify-center gap-2 mb-8" aria-label="Core tools">
            {tools.map((tool) => (
              <li
                key={tool}
                className="px-3 py-1 rounded-full border border-primary/30 bg-card/70 text-sm font-medium text-foreground"
              >
                {tool}
              </li>
            ))}
          </ul>

          {/* Value proposition */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            I lead analytics at Burn Manufacturing, a clean cookstove maker and carbon developer
            selling in 10+ African countries. I build the executive dashboards, KPI frameworks and data
            pipelines that leadership uses to plan, catch risks early, and decide where to invest.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto mb-10">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              View Projects
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.resume} download>
                <Download /> Download CV
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="hover:text-primary"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3">
            <Button asChild variant="ghost" size="icon" className="h-11 w-11 hover:text-primary">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="!size-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-11 w-11 hover:text-primary">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="!size-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-11 w-11 hover:text-primary">
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail className="!size-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (desktop only; on phones it collides with the content) */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection('about')}
          className="hover:text-primary"
          aria-label="Scroll to About"
        >
          <ArrowDown className="!size-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
