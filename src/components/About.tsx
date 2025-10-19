import profilePhoto from '@/assets/profile-photo.jpg';
import profilePic from '@/assets/profile_pic.jpg';

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
                  src={profilePic}
                  // src="./assets/profile_pic.jpg" 
                  alt="Tabish Ali Ansari - Full Stack AI Engineer"
                  className="w-fill h-96 object-cover group-hover:scale-105 transition-transform duration-500"
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
                  I’m the friendly neighborhood coder! An AI & Data Science undergrad with a curious mind and 
                  a maker’s spirit. My journey with tech started when I was 15, experimenting with HTML and 
                  CSS just for fun. That early fascination evolved into a drive to build applications.
                  I truly discovered my passion for Data Science when I came across the words
                  “Artificial Intelligence” tucked away in a small section of my school computer textbook.
                </p>
                <p className="text-text-secondary leading-relaxed text-lg">
                  Beyond the screen, I’m passionate about football, painting, and traveling — things that keep 
                  me grounded, inspired, and constantly learning from the world around me. Whether I’m on a 
                  football field or exploring a new place, I bring the same energy to my work: curiosity, 
                  focus, and the desire to create something meaningful.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-surface-tertiary">
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-blue mb-1">6+</div>
                  <div className="text-sm text-text-secondary">Months Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-blue mb-1">5+</div>
                  <div className="text-sm text-text-secondary">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-blue mb-1">10+</div>
                  <div className="text-sm text-text-secondary">Hackathons Participated</div>
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