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
      title: "Bean&Beyond - Cafe Website",
      description:
        "A full-stack Cafe Management System designed to streamline cafe operations by enabling efficient menu management, order processing, and billing through a clean and user-friendly interface. The system focuses on performance, scalability, and smooth user experience.",
      duration: "July 2025",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      details: [
        "Developed a responsive and interactive frontend using React.js with efficient state management for real-time order updates.",
        "Built RESTful APIs using Node.js and Express.js to handle menu, orders, and billing operations.",
        "Integrated MongoDB for secure and scalable storage of menu items and order data.",
        "Implemented optimized component rendering and structured data flow to improve overall performance.",
        "Followed a structured SDLC approach, including requirement analysis, development, testing, and iterative improvements.",
      ],
      githubLink:
        "https://github.com/SurendraPal7/cafe_frontend",
      projectLink: "https://cafe-frontend-peach.vercel.app/",
    },
    {
      title: "ExploreVista - Travel and Tourism Website",
      description:
        "ExploreVista is a user-friendly travel and tourism website designed to help users discover destinations, plan trips, and explore travel experiences with ease.",
      duration: "November 2024",
      tech: ["React.js", "Tailwind CSS"],
      details: [
        "Developed a dynamic and user-friendly travel and tourism website with an intuitive interface.",
        "Implemented a responsive UI/UX using Tailwind CSS for seamless cross-device experience.",
        "Optimized performance with lazy loading and efficient state management.",
        "Enhanced user interaction through smooth animations, search filters, and intuitive navigation.",
      ],
      githubLink:
        "https://github.com/SurendraPal7/Travel-and-Tourism-App-using-React-js",
      projectLink: "https://explorevista.vercel.app/",
    },
    {
      title: "Library Management System",
      description:
        "CPP-based system for managing and tracking library book records",
      duration: "May 2024 - June 2024",
      tech: ["C++", "DSA"],
      details: [
        "Developed a console-based Library Management System using C++ and data structures.",
        "Implemented features like adding, deleting, issuing, and returning books, along with search functionality by ID or title.",
        "Enabled sorting of records, tracking availability status, and maintaining borrower details.",
        "Designed to be efficient, user-friendly, and suitable for small to medium-scale libraries.",
      ],
      githubLink:
        "https://github.com/SurendraPal7/Library-Management-System-LMS-",
      projectLink: "#",
    },
    {
      title: "🗑 Waste Management System – UI/UX Design",
      description:
        "This project focuses on designing a user-friendly mobile interface for a Waste Management System aimed at promoting environmental awareness and improving waste handling practices in both urban and rural areas.",
      duration: "May 2025",
      tech: ["Figma"],
      details: [
        "Conducted user research through survey data to identify pain points in waste disposal and segregation.",
        "Defined user goals and created task flows based on insights from both urban and rural participants.",
        "Designed low-fidelity wireframes to plan layout and structure for key screens.",
        "Created high-fidelity mockups with a consistent color scheme, typography, and eco-conscious visual elements.",
        "Developed an intuitive, user-friendly interface to encourage waste reporting, segregation, and awareness.",
        "Focused on accessibility, visual clarity, and minimal design to improve user engagement.",
        "Documented the entire design process from ideation to prototype for portfolio presentation.",
      ],
      
      projectLink: "https://www.figma.com/design/JhW89pnVe5AFDDeyaewzYM/UI-for-the-waste-management-system?node-id=0-1&p=f&t=HmxLXP1HeZW1k0sA-0",
    },
    {
      title: "✈ Travel & Tourism App – UI/UX Design",
      description:
        "Designed a user-friendly travel app interface that helps users explore destinations and plan trips with ease. From user research to wireframes and high-fidelity mockups, I focused on clean navigation, modern visuals, and accessibility. The design system supports scalability and ensures a smooth development handoff.",
      duration: "December 2024",
      tech: ["Figma"],
      details: [
        "Designed a visually engaging and intuitive UI for a travel and tourism web application aimed at helping users explore destinations and plan trips efficiently.",
        "Created user personas and journey maps to understand traveler needs and design goal-oriented experiences.",
        "Developed low-fidelity wireframes for core user flows such as destination browsing, itinerary planning, and booking.",
        "Designed high-fidelity mockups using vibrant color palettes, modern typography, and region-specific imagery to enhance user engagement.",
        "Focused on clean navigation, responsive layout, and accessible design for various user demographics.",
        "Translated research and feedback into practical UI improvements to enhance user satisfaction and app usability.",

      ],
      
      projectLink: "https://www.figma.com/design/Dwn5XoozjSnsYt8bMVndp3/ExploreVista-Travel-and-Tourism-App?node-id=0-1&p=f&t=5dQggzlfEx4pseRN-0",
    },
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
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs text-gray-400">
                      {project.duration}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="mr-2 mb-2 border-primary-purple/50"
                      >
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
