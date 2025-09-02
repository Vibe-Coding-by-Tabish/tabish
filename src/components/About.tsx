import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-surface-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-16">
            About <span className="text-electric-blue">Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Photo */}
            <div className="relative group animate-fade-in-up">
              <div className="relative overflow-hidden rounded-2xl shadow-medium group-hover:shadow-glow transition-all duration-500">
                <img 
                  src={profilePhoto} 
                  alt="Alex Chen - Full Stack AI Engineer"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-electric-blue rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-electric-blue rounded-2xl opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="prose prose-lg max-w-none">
                <p className="text-text-secondary leading-relaxed text-lg">
                  I'm a passionate technologist who discovered the intersection of artificial intelligence 
                  and full-stack development early in my career. What started as curiosity about machine 
                  learning algorithms has evolved into a deep expertise in building end-to-end intelligent systems.
                </p>
                
                <p className="text-text-secondary leading-relaxed text-lg">
                  My philosophy centers on creating software that is not only functional but truly intelligent 
                  and user-centric. I believe the best AI applications are those that seamlessly integrate 
                  into users' workflows, making complex tasks feel effortless.
                </p>
                
                <p className="text-text-secondary leading-relaxed text-lg">
                  When I'm not coding, I'm exploring the latest developments in AI research, contributing to 
                  open-source projects, or sharing insights through technical writing. I'm particularly 
                  interested in the ethical implications of AI and how we can build more inclusive, 
                  transparent systems.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-surface-tertiary">
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-blue mb-1">5+</div>
                  <div className="text-sm text-text-secondary">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-blue mb-1">50+</div>
                  <div className="text-sm text-text-secondary">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-blue mb-1">15+</div>
                  <div className="text-sm text-text-secondary">AI Models Deployed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;