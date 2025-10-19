import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-surface-primary">
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-surface-secondary border-t border-surface-tertiary/20 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-text-secondary">
              © 2025 Tabish Ali Ansari
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
