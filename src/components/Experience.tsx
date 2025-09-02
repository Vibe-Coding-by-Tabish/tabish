import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior AI Engineer',
      company: 'TechFlow AI',
      location: 'San Francisco, CA',
      period: 'Jan 2023 - Present',
      description: [
        'Led development of production ML systems serving 100K+ daily users with 99.9% uptime',
        'Architected microservices infrastructure reducing model inference latency by 60%',
        'Mentored junior engineers and established ML engineering best practices'
      ]
    },
    {
      type: 'work',
      title: 'Full Stack AI Developer',
      company: 'DataVision Corp',
      location: 'Remote',
      period: 'Mar 2021 - Dec 2022',
      description: [
        'Built end-to-end data science applications using React, Python, and cloud services',
        'Improved model accuracy by 25% through advanced feature engineering and optimization',
        'Collaborated with product teams to translate business requirements into technical solutions'
      ]
    },
    {
      type: 'work',
      title: 'Software Engineer',
      company: 'StartupLab Inc',
      location: 'Austin, TX',
      period: 'Jun 2019 - Feb 2021',
      description: [
        'Developed scalable web applications using modern JavaScript frameworks and Node.js',
        'Implemented CI/CD pipelines reducing deployment time by 80%',
        'Contributed to open-source projects and technical documentation'
      ]
    },
    {
      type: 'education',
      title: 'M.S. Computer Science',
      company: 'Stanford University',
      location: 'Stanford, CA',
      period: '2017 - 2019',
      description: [
        'Specialized in Machine Learning and Artificial Intelligence',
        'Thesis: "Scalable Deep Learning for Real-time Recommendation Systems"',
        'GPA: 3.9/4.0, Dean\'s List, Research Assistant in AI Lab'
      ]
    },
    {
      type: 'education',
      title: 'B.S. Computer Engineering',
      company: 'UC Berkeley',
      location: 'Berkeley, CA',
      period: '2013 - 2017',
      description: [
        'Graduated Magna Cum Laude with focus on Software Engineering',
        'President of Computer Science Student Association',
        'Winner of multiple hackathons and programming competitions'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-surface-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-4">
            Experience & <span className="text-electric-blue">Education</span>
          </h2>
          <p className="text-text-secondary text-center mb-16 max-w-3xl mx-auto">
            A journey through innovative companies and prestigious institutions, 
            building expertise in AI and full-stack development.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-electric-blue to-transparent"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative flex items-start group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 w-4 h-4 bg-electric-blue rounded-full border-4 border-surface-secondary group-hover:scale-125 transition-transform duration-300 z-10">
                    <div className="absolute inset-0 bg-electric-blue rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* Content card */}
                  <div className="ml-20 bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-500 border border-surface-tertiary/30 hover:border-electric-blue/30 group-hover:scale-105 w-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-colors duration-300">
                          {exp.type === 'work' ? (
                            <Briefcase className="h-5 w-5 text-electric-blue" />
                          ) : (
                            <GraduationCap className="h-5 w-5 text-electric-blue" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-text-primary group-hover:text-electric-blue transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-electric-blue font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-text-secondary">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-text-secondary flex items-start gap-2">
                          <span className="text-electric-blue mt-2 text-xs">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;