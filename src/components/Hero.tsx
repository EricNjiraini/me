import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Eric Njiraini
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground mb-8 mt-4">
            Data Analytics Leader • Insight Architect • Storyteller
          </h2>
          <h2 className="text-1xl md:text-2xl text-foreground mb-8 mt-4">
            Where Business Meets Data - and Insight Drives Decision
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            I help mission-driven teams unlock the full value of their data — transforming raw information 
            into strategy-shaping insights. From dashboards and predictive analytics to operational 
            intelligence, I turn complexity into clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Let’s Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <Button variant="ghost" size="sm" className="hover:text-primary">
              <Github size={24} />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary">
              <Linkedin size={24} />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary">
              <Mail size={24} />
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
