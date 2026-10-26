import { MotionConfig } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import InsightsShelf from '@/components/InsightsShelf';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { usePageTitle } from '@/hooks/use-page-title';

const Index = () => {
  usePageTitle();

  return (
    // Honour the OS "reduce motion" setting for all framer-motion animations
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <InsightsShelf />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default Index;
