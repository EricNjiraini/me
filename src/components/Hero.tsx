import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.webp';
import { profile, scrollToSection } from '@/lib/profile';

// Capabilities only; individual tools live in the Skills section.
const focusAreas = ['AI Strategy', 'MLOps', 'Data Strategy', 'AWS Cloud', 'Data Analytics'];

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-gradient-subtle overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />

      <div className="relative z-10 container mx-auto px-5 sm:px-6 pt-20 sm:pt-24 pb-16 md:pt-28 text-center">
        <div className="animate-fade-in max-w-4xl mx-auto">

          {/* Headshot (also referenced by the JSON-LD in index.html) */}
          <img
            src="/eric-njiraini.webp"
            alt={profile.name}
            width={400}
            height={400}
            className="mx-auto mb-5 h-28 w-28 sm:h-36 sm:w-36 rounded-full object-cover ring-4 ring-primary/20 shadow-elegant"
          />

          {/* SEO PRIMARY H1: name + role */}
          <h1 className="mb-5">
            <span className="block text-lg sm:text-2xl font-semibold text-foreground mb-2">
              {profile.name}
            </span>
            <span className="sr-only">, </span>
            <span className="block text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight pb-2">
              Data Analytics Manager
            </span>
          </h1>

          {/* Supporting line */}
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Turning data into business decisions
          </p>

          {/* Focus areas */}
          <ul className="flex flex-wrap justify-center gap-2 mb-8" aria-label="Focus areas">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="px-3 py-1 rounded-full border border-primary/50 bg-primary/10 text-sm font-medium text-foreground"
              >
                {area}
              </li>
            ))}
          </ul>

          {/* Value proposition */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Based in Nairobi, I lead analytics and drive data and AI strategy at Burn Manufacturing, a
            clean cookstove maker and carbon developer in 10+ African countries. I set the data strategy
            that took our platform to AWS, and today I put ML models into production, keep data costs
            lean, and build the team and dashboards leadership relies on.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto mb-10">
            <Button
              size="lg"
              onClick={() => scrollToSection('insights')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Explore Insights
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
    </section>
  );
};

export default Hero;
