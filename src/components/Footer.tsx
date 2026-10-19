import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/lib/profile';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-5 sm:px-6 py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        {/* suppressHydrationWarning: the prerendered year can lag the visitor's clock at New Year */}
        <p className="text-sm text-muted-foreground text-center sm:text-left" suppressHydrationWarning>
          © {new Date().getFullYear()} {profile.name}
          <span className="hidden sm:inline"> · {profile.role}</span> · {profile.location}
        </p>

        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="icon" className="h-11 w-11 hover:text-primary">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="!size-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="h-11 w-11 hover:text-primary">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="!size-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="h-11 w-11 hover:text-primary">
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail className="!size-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 hover:text-primary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <ArrowUp className="!size-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
