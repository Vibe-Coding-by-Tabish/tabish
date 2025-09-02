import { Brain, Code, Database, Cloud, Globe, Cpu } from 'lucide-react';

const TechStack = () => {
  const techCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'text-electric-blue',
      technologies: [
        'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 
        'Hugging Face', 'LangChain', 'Pandas', 'NumPy'
      ]
    },
    {
      title: 'Backend Development',
      icon: Cpu,
      color: 'text-electric-blue',
      technologies: [
        'Node.js', 'Express.js', 'Python', 'Flask', 
        'Django', 'Golang', 'FastAPI', 'GraphQL'
      ]
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'text-electric-blue',
      technologies: [
        'JavaScript', 'TypeScript', 'React', 'Next.js', 
        'Svelte', 'HTML5', 'CSS3', 'Tailwind CSS'
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'text-electric-blue',
      technologies: [
        'PostgreSQL', 'MongoDB', 'Redis', 'Pinecone', 
        'Chroma', 'MySQL', 'Neo4j', 'ElasticSearch'
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'text-electric-blue',
      technologies: [
        'Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 
        'Google Cloud', 'Vercel', 'Terraform', 'Nginx'
      ]
    },
    {
      title: 'Development Tools',
      icon: Code,
      color: 'text-electric-blue',
      technologies: [
        'Git', 'VS Code', 'Jupyter', 'Postman', 
        'Jest', 'Pytest', 'ESLint', 'Prettier'
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-surface-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-4">
            Tech <span className="text-electric-blue">Stack</span>
          </h2>
          <p className="text-text-secondary text-center mb-16 max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI/ML, full-stack development, and cloud infrastructure, 
            carefully curated for building intelligent, scalable applications.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={category.title}
                  className="group bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-500 border border-surface-tertiary/30 hover:border-electric-blue/30 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-xl bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-colors duration-300">
                      <IconComponent className={`h-8 w-8 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary ml-4 group-hover:text-electric-blue transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {category.technologies.map((tech) => (
                      <div 
                        key={tech}
                        className="px-3 py-2 bg-surface-tertiary/50 rounded-lg text-sm text-text-secondary hover:bg-electric-blue/10 hover:text-electric-blue transition-all duration-300 cursor-default border border-transparent hover:border-electric-blue/20"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;