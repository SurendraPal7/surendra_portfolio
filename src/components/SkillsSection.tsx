
import { Card } from "@/components/ui/card";

interface SkillCategory {
  name: string;
  skills: string[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: ["C", "C++", "Java", "JavaScript", "HTML", "R"]
    },
    {
      name: "Frameworks",
      skills: ["CSS", "React"]
    },
    {
      name: "Tools & Platforms",
      skills: ["MySQL", "Tableau", "Alteryx Studio", "Oracle-DB", "Informatica"]
    },
    {
      name: "Soft Skills",
      skills: ["Problem-Solving", "Team Player", "Project Management", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.name}
              className="bg-secondary/30 border border-secondary/50 p-6 rounded-lg overflow-hidden animated-card"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="skill-tag"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Progress bar section */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-white">Proficiency</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Data Analysis</span>
                <span className="text-primary-purple">90%</span>
              </div>
              <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                <div className="h-full bg-primary-purple rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Programming</span>
                <span className="text-primary-purple">85%</span>
              </div>
              <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                <div className="h-full bg-primary-purple rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Database Management</span>
                <span className="text-primary-purple">80%</span>
              </div>
              <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                <div className="h-full bg-primary-purple rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Data Visualization</span>
                <span className="text-primary-purple">95%</span>
              </div>
              <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                <div className="h-full bg-primary-purple rounded-full" style={{ width: "95%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
