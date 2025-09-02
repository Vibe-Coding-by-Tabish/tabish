import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, ExternalLink } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const skills = [
    'AI & Machine Learning',
    'Full-Stack Development', 
    'Data-Driven Solutions'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-glow rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-glow rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-glow rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 animate-fade-in-up">
            Alex Chen
            <span className="text-electric-blue">.</span>
          </h1>

          {/* Animated Skills */}
          <div className="mb-8 h-20 flex items-center justify-center">
            <div className="text-2xl md:text-3xl font-medium text-text-secondary">
              <span className="text-electric-blue mr-2">&gt;</span>
              <span 
                key={currentSkillIndex}
                className="inline-block animate-fade-in"
              >
                {skills[currentSkillIndex]}
              </span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            A passionate Full Stack AI Engineer dedicated to building scalable, intelligent applications. 
            I transform complex problems into elegant, production-ready systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <Button 
              variant="social" 
              size="icon-lg"
              asChild
            >
              <a 
                href="https://linkedin.com/in/alexchen" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button 
              variant="social" 
              size="icon-lg"
              asChild
            >
              <a 
                href="https://github.com/alexchen" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button 
              variant="social" 
              size="icon-lg"
              asChild
            >
              <a 
                href="https://medium.com/@alexchen" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Blog"
              >
                <ExternalLink className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-text-secondary" />
      </div>
    </section>
  );
};

export default Hero;