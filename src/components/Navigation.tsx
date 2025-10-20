import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'tech-stack' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface-primary/95 backdrop-blur-md shadow-medium border-b border-surface-tertiary/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-text-primary hover:text-electric-blue transition-colors duration-300"
          >
            Tabish<span className="text-electric-blue">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-text-secondary hover:text-electric-blue transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Resume & CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="hero-outline" 
              onClick={() => navigate('/resume')}
              className="text-text-secondary hover:red"
            >
              <FileText className="h-4 w-4 mr-2" />
              Resume
            </Button>
            <Button 
              variant="hero-outline" 
              onClick={() => scrollToSection('contact')}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-text-primary hover:text-electric-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-surface-primary/95 backdrop-blur-md border-b border-surface-tertiary/20 animate-fade-in">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-text-secondary hover:text-electric-blue transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-surface-tertiary/20 space-y-3">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={() => {
                    navigate('/resume');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Resume
                </Button>
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => scrollToSection('contact')}
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;