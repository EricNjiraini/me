import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle">
      
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in max-w-6xl mx-auto px-4">

          {/* SEO PRIMARY H1 */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-snug pb-2">
            Data Analytics Manager
          </h1>

          {/* Supporting SEO line */}
          <h2 className="text-2xl md:text-3xl text-foreground mb-8 mt-4">
            Power BI • SQL • Python • R • Metabase • Cloud Computing 
          </h2>

          {/* Optional branding line (kept but de-emphasized) */}
          <p className="text-xl md:text-2xl text-foreground mb-8 mt-4 font-medium">
            Turning Data into Business Decisions
          </p>

          {/* Value proposition (important for ranking + engagement) */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
			I design and deliver data-driven decision systems that help leadership teams turn complex data into clear business strategy.
			From executive dashboards to KPI frameworks and predictive analytics, I help organizations improve performance visibility, operational efficiency, and strategic decision-making.
			Let’s turn data into decisions that matter.
          </p>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <Button asChild variant="ghost" size="sm" className="hover:text-primary">
              <a href="https://github.com/EricNjiraini" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="hover:text-primary">
              <a href="https://www.linkedin.com/in/eric-njiraini/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="hover:text-primary">
              <a href="mailto:menjiraini@gmail.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => scrollToSection('about')}
            className="hover:text-primary"
          >
            <ArrowDown size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;