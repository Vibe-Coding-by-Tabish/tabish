import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import adapt from "@/assets/adapt.png";
import metaboliq from "@/assets/metaboliq.png";
import htis from "@/assets/htis.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ADAPT",
      tagline: "Alzheimer's Disease Analysis and Prediction Tool",
      description:
        "An AI-powered deep learning system designed to detect and classify the stages of Alzheimer’s disease from MRI scans. Utilizes VGG-19 for high accuracy and integrates a user-friendly web interface for medical professionals.",
      image: adapt,
      technologies: [
        "Python",
        "LangChain",
        "VGG-19",
        "React",
        "FastAPI",
        "PostgreSQL",
        "MLOps",
      ],
      demoUrl: "https://adapt-webapp-007.netlify.app/",
      githubUrl:
        "https://github.com/DA-workshop-101/Alzheimer-Stages-Classification-using-Deep-Learning",
      featured: true,
    },
    {
      id: 2,
      title: "MetaboliQ AI",
      tagline: "AI-powered diabetes prediction and management platform",
      description:
        "MetaboliQ AI is an advanced solution designed to harness the power of AI and IoT to revolutionize diabetes care. By integrating machine learning algorithms with real-time health monitoring, MetaboliQ AI provides personalized insights and proactive management strategies for individuals at risk of or living with diabetes.",
      image: metaboliq,
      technologies: [
        "React",
        "TypeScript",
        "Python",
        "TensorFlow",
        "Scikit-Learn",
        "Machine Learning",
        "Flask",
      ],
      demoUrl: "https://www.youtube.com/watch?v=sxvw4tzdTpY",
      githubUrl: "https://github.com/tabishaliansari/MetaboliQ-AI",
      featured: true,
    },
    {
      id: 3,
      title: "HTIS",
      tagline: "Healthcare Terminology Integration System",
      description:
        "HTIS is a comprehensive platform designed to facilitate the integration and management of healthcare terminology across various systems. By leveraging advanced algorithms and a user-friendly interface, HTIS enables healthcare professionals to easily access, update, and utilize standardized terminology, improving communication and collaboration.",
      image: htis,
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Python",
        "React",
        "Azure",
        "PostgreSQL",
      ],
      demoUrl: "https://htis-psi.vercel.app/",
      githubUrl: "https://github.com/Vibe-Coding-by-Tabish/HTIS",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-surface-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-4">
            Featured <span className="text-electric-blue">Projects</span>
          </h2>
          <p className="text-text-secondary text-center mb-16 max-w-3xl mx-auto">
            A showcase of intelligent applications that demonstrate the
            intersection of AI innovation and full-stack engineering excellence.
          </p>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div
                  className={`relative overflow-hidden rounded-2xl shadow-medium group-hover:shadow-glow transition-all duration-500 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Content */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
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
