import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navSections, profile, scrollToSection } from '@/lib/profile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scrollspy logic (nothing active while in the hero)
      const current = navSections.find((section) => {
        const rect = document.getElementById(section)?.getBoundingClientRect();
        return rect && rect.top <= 80 && rect.bottom >= 80;
      });
      setActiveSection(current ?? '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  const goTo = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-background/95 backdrop-blur-md shadow-card' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 lg:py-4" aria-label="Main">
        <div className="flex items-center justify-between gap-4">
          {/* Brand / Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="py-2 text-lg sm:text-xl font-bold text-primary text-left leading-tight"
          >
            {profile.name}
            <span className="hidden sm:inline font-semibold text-foreground/70"> | Analytics for Impact</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-7 items-center">
            {navSections.map((item) => (
              <button
                key={item}
                onClick={() => goTo(item)}
                className={`relative capitalize transition-colors duration-200 ${
                  activeSection === item
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                } group`}
              >
                {item}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                    activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}

            {/* Download CV */}
            <a
              href={profile.resume}
              download
              className="ml-4 text-sm font-medium text-foreground hover:text-primary border border-border px-4 py-2 rounded-lg transition"
            >
              Download CV
            </a>

            {/* Hire Me Button */}
            <Button className="ml-2" onClick={() => goTo('contact')}>
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-11 w-11 shrink-0 hover:bg-primary/10 hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="!size-6" /> : <Menu className="!size-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="lg:hidden mt-3 pb-2 animate-fade-in">
            <ul className="divide-y divide-border border-y border-border">
              {navSections.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => goTo(item)}
                    className={`block w-full text-left px-2 py-3.5 text-base capitalize transition-colors ${
                      activeSection === item ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-3 pt-4">
              <Button asChild variant="outline" size="lg" className="px-4">
                <a href={profile.resume} download>
                  <Download /> Download CV
                </a>
              </Button>
              <Button size="lg" className="px-4" onClick={() => goTo('contact')}>
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
