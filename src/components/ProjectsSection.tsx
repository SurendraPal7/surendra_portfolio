import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  duration: string;
  tech: string[];
  details: string[];
  githubLink?: string;
  projectLink?: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Electric Vehicle Data Analysis",
      description: "Interactive Tableau dashboard analyzing EV adoption trends",
      duration: "November 2024",
      tech: ["Tableau"],
      details: [
        "Developed an interactive Tableau dashboard to analyze EV adoption trends across the U.S.",
        "Visualized key insights on charging infrastructure.",
        "Regional growth, and consumer preferences using Dynamic visualizations and calculated metrics."
      ],
      githubLink: "https://github.com/9ashishraj/EV-Data-Analysis",
      projectLink: "#"
    },
    {
      title: "Toll Management System",
      description: "CPP-based system for tracking vehicle movement",
      duration: "July 2024 - August 2024",
      tech: ["C++", "DSA"],
      details: [
        "Developed a Toll Management system using CPP language and concepts of Data Structures.",
        "Keep track of the vehicle's movement, record the time and the details like Owner's name, date of registration, vehicle model.",
        "The system made is user friendly and efficient in vehicle tracking, time management can also be used for automation of Toll gate."
      ],
      githubLink: "https://github.com/Ashish1379/TOLL-MANAGEMENT/blob/main/project_code.c",
      projectLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-darker relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-secondary/30 border border-secondary/50 overflow-hidden animated-card"
            >
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className="text-xs text-gray-400">{project.duration}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    {project.tech.map(tech => (
                      <Badge key={tech} variant="outline" className="mr-2 mb-2 border-primary-purple/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <ul className="list-disc pl-5 text-gray-400 space-y-1 mb-6">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-4">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary-purple hover:text-primary-purple/80 transition-colors"
                      >
                        <Github size={18} className="mr-1" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.projectLink && (
                      <a 
                        href={project.projectLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary-purple hover:text-primary-purple/80 transition-colors"
                      >
                        <ExternalLink size={18} className="mr-1" />
                        <span>View Project</span>
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
