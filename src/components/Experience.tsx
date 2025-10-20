import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Full-Stack AI Intern",
      company: "NonStop io Technologies",
      location: "Pune, India",
      period: "Jan 2023 - Present",
      icon: "/nonstop.jpg",
      description: [
        "Built and scaled backend systems with Java + Spring Boot, adding OAuth 2.0 authentication and automating PDF workflows using pdfme.",
        "AWorked across the stack with React, NestJS, and Nextflow, improving data pipelines and building tools that actually made work easier.",
        "Explored AI-driven automation, shared knowledge with teammates, and honed skills in Git, Postman, JMeter, and agile development.",
      ],
    },
    {
      type: "work",
      title: "Hackathons",
      company: "Team Mavericks and others",
      location: "Hybrid",
      period: "Sep 2023 - Present",
      icon: "/mavericks.png",
      description: [
        "As the leader of Team Mavericks, I spearheaded our journey through multiple national-level competitions",
        "Secured a 3rd place finish, a first runner-up title with a cash prize, and achieving All-India Top 10 with ₹10,000 in Amazon gift vouchers.",
        "I drove strategy, collaboration, and innovation to consistently deliver winning solutions under pressure.",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Technology in AI & Data Science",
      company: "AISSMS Institute of Information Technology",
      location: "Pune, India",
      period: "Nov 2020 - Jul 2026",
      icon: "/ioit.png",
      description: [
        "Specializing in Artificial Intelligence & Data Science with minor in Electronics and Telecommunications.",
        "Relevant coursework includes Data Structures, Algorithms, Database Systems, Machine Learning, Deep Learning, Cloud Computing, Software Engineering and Operating Systems.",
        "8.23 CGPA as of October 2025",
      ],
    },
    {
      type: "education",
      title: "French (B-2 Proficiency)",
      company: "Department of Foreign Languages, SPPU",
      location: "Pune, India",
      period: "2021 - 2025",
      icon: "/sppu.jpeg",
      description: [
        "Completed Advanced Diploma in French from the Department of Foreign Languages, SPPU, attaining B2 proficiency.",
        "Specialized in translation during the final year, gaining hands-on experience with CAT tools and strengthening professional linguistic accuracy across domains.",
      ],
    },
    {
      type: "education",
      title: "10th (SSC) and 12th (HSC) CBSE",
      company: "Sinhgad City School",
      location: "Pune, India",
      period: "2020 - 2022",
      icon: "/scs.png",
      description: [
        "Scored 96% in 10th grade and 92% in 12th grade.",
        "Earned a certificate of merit in Mathematics Standard, placing in the top 0.1% nationwide",
        "Led the Red House football team to two consecutive inter-house championship wins, reflecting both academic excellence and leadership.",
      ],
    },
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

                  {/* Card container */}
                  <div className="ml-20 bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-500 border border-surface-tertiary/30 hover:border-electric-blue/30 group-hover:scale-[1.02] w-full flex items-start gap-6">
                    {/* Left logo section */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-all duration-300 flex items-center justify-center shadow-inner">
                        {exp.icon ? (
                          <img
                            src={exp.icon}
                            alt={`${exp.company} logo`}
                            className="w-10 h-10 object-contain rounded-lg"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-electric-blue rounded-full" />
                        )}
                      </div>
                    </div>

                    {/* Right text section */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-electric-blue transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-electric-blue font-medium">
                          {exp.company}
                        </p>
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
                          <li
                            key={i}
                            className="text-text-secondary flex items-start gap-2"
                          >
                            <span className="text-electric-blue mt-2 text-xs">
                              ▸
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
