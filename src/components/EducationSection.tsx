import { Calendar, GraduationCap, Award, ExternalLink } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  grade?: string;
  percentage?: string;
}

interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  url: string;
}

const EducationSection = () => {
  const educationItems: EducationItem[] = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      duration: "Since August 2022",
      location: "Punjab, India",
      grade: "CGPA: 8.3"
    },
    {
      institution: "Chauhan Public School",
      degree: "Intermediate",
      duration: "April 2021 - March 2022",
      location: "BhagalPur, Bihar",
      percentage: "Percentage: 75.2"
    },
    {
      institution: "DAV Public School",
      degree: "Matriculation",
      duration: "April 2019 - March 2020",
      location: "MathuraPur, Bihar",
      percentage: "Percentage: 91.8"
    }
  ];

  const certificates: CertificateItem[] = [
    {
      title: "Software Testing | NPTEL",
      issuer: "NPTEL",
      date: "October 2024",
      logo: "https://www.nptel.ac.in/sites/default/files/NPTEL-logo.jpg",
      url: "https://drive.google.com/file/d/1k5iHBvYzYPwUPHFqDXrJfE3WgptKaamj/view?usp=drive_link"
    },
    {
      title: "Data Analysis with Tableau",
      issuer: "Coursera",
      date: "November 2024",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png",
      url: "https://www.google.com"
    },
    {
      title: "Approximation Algorithms and Linear Programming",
      issuer: "Coursera",
      date: "April 2024",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png",
      url: "https://www.google.com"
    },
    {
      title: "Gen-AI for everyone",
      issuer: "Coursera",
      date: "February 2024",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png",
      url: "https://coursera.org/share/4d5b73469355a4abdffd0717d3058ca4"
    }
  ];

  return (
    <section id="education" className="py-20 bg-dark relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education & Certifications</h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center text-white">
              <GraduationCap className="mr-2 text-primary-purple" />
              Education
            </h3>
            
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-secondary"></div>
              
              {educationItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-12 animate-fade-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-8 h-8 bg-secondary/50 border-2 border-primary-purple rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-purple rounded-full"></div>
                  </div>
                  
                  <div className="bg-secondary/30 border border-secondary/50 p-6 rounded-lg animated-card">
                    <h4 className="text-xl font-medium text-white mb-2">{item.institution}</h4>
                    <p className="text-gray-300 mb-2">{item.degree}</p>
                    <div className="flex items-center text-gray-400 mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.duration}</span>
                    </div>
                    <p className="text-gray-400 mb-2">{item.location}</p>
                    {item.grade && <p className="text-primary-purple">{item.grade}</p>}
                    {item.percentage && <p className="text-primary-purple">{item.percentage}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center text-white">
              <Award className="mr-2 text-primary-purple" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-secondary/30 border border-secondary/50 p-6 rounded-lg animated-card animate-fade-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <a 
                      href={cert.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-shrink-0 bg-white p-1 rounded-md hover:opacity-80 transition-opacity"
                    >
                      <img 
                        src={cert.logo} 
                        alt={cert.issuer}
                        className="w-12 h-12 object-contain"
                      />
                    </a>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-medium text-white mb-2">{cert.title}</h4>
                        <a 
                          href={cert.url}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-purple hover:text-primary-purple/80 transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                      <p className="text-gray-300 mb-1">Issuer: {cert.issuer}</p>
                      <div className="flex items-center text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Achievements Section */}
            <h3 className="text-2xl font-semibold mt-12 mb-8 flex items-center text-white">
              <Award className="mr-2 text-primary-purple" />
              Achievements
            </h3>
            
            <div className="bg-secondary/30 border border-secondary/50 p-6 rounded-lg animated-card">
              <ul className="list-disc pl-5 text-gray-300 space-y-3">
                <li>
                  <span className="font-medium text-white">Solved 100+ on Leet-code Platform:</span>
                  <p className="text-gray-400">Including the questions: Easy - 49, Medium - 47, Hard - 4</p>
                </li>
                <li>
                  <span className="font-medium text-white">Solved 50+ On Geeks For Geeks Platform:</span>
                  <p className="text-gray-400">Having coding score of 150+ on GFG</p>
                </li>
                <li>
                  <span className="font-medium text-white">Volunteered in ICCS 2023:</span>
                  <p className="text-gray-400">Participated and volunteered in 8th International Conference on Computing Sciences in 2023</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
