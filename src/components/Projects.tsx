import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import chatbotImage from '@/assets/project-chatbot.jpg';
import mlDashboardImage from '@/assets/project-ml-dashboard.jpg';
import ecommerceImage from '@/assets/project-ecommerce.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Customer Support Chatbot',
      tagline: 'Intelligent conversational AI with 95% resolution rate',
      description: 'Built a sophisticated chatbot using LangChain and OpenAI that handles customer inquiries across multiple domains. Features natural language understanding, context retention, and seamless handoff to human agents.',
      image: chatbotImage,
      technologies: ['Python', 'LangChain', 'OpenAI API', 'React', 'FastAPI', 'PostgreSQL', 'Redis'],
      demoUrl: 'https://demo.chatbot-ai.com',
      githubUrl: 'https://github.com/alexchen/ai-chatbot',
      featured: true
    },
    {
      id: 2,
      title: 'ML Analytics Dashboard',
      tagline: 'Real-time machine learning insights and model monitoring',
      description: 'Comprehensive dashboard for monitoring ML model performance, data drift detection, and automated retraining pipelines. Built with modern React and integrated with MLOps best practices.',
      image: mlDashboardImage,
      technologies: ['React', 'TypeScript', 'Python', 'TensorFlow', 'Docker', 'AWS', 'Grafana'],
      demoUrl: 'https://ml-dashboard-demo.com',
      githubUrl: 'https://github.com/alexchen/ml-dashboard',
      featured: true
    },
    {
      id: 3,
      title: 'Smart E-commerce Platform',
      tagline: 'AI-driven personalization engine increasing conversions by 40%',
      description: 'Full-stack e-commerce platform with intelligent product recommendations, dynamic pricing, and predictive inventory management. Features real-time personalization and advanced analytics.',
      image: ecommerceImage,
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'TensorFlow', 'Stripe', 'AWS', 'Redis'],
      demoUrl: 'https://smart-commerce-demo.com',
      githubUrl: 'https://github.com/alexchen/smart-ecommerce',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-surface-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-4">
            Featured <span className="text-electric-blue">Projects</span>
          </h2>
          <p className="text-text-secondary text-center mb-16 max-w-3xl mx-auto">
            A showcase of intelligent applications that demonstrate the intersection of AI innovation 
            and full-stack engineering excellence.
          </p>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`group grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-medium group-hover:shadow-glow transition-all duration-500">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Project links overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex gap-4">
                        <Button variant="hero" size="lg" asChild>
                          <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-5 w-5" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="hero-outline" size="lg" asChild>
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-5 w-5" />
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 group-hover:text-electric-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-lg text-electric-blue font-medium mb-4">
                      {project.tagline}
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-surface-secondary rounded-full text-sm text-text-secondary border border-surface-tertiary hover:border-electric-blue hover:text-electric-blue transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button variant="project" asChild>
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="hero-outline" asChild>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;