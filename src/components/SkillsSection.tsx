
import { Card } from "@/components/ui/card";
import { 
  Code2, 
  FileCode, 
  MonitorSmartphone, 
  Database, 
  LineChart, 
  Brain, 
  Blocks, 
  Users
} from "lucide-react";

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      icon: <Code2 size={24} className="text-primary-purple" />,
      skills: [
        { name: "C", icon: <span className="text-lg font-bold">C</span> },
        { name: "C++", icon: <span className="text-lg font-bold">C++</span> },
        { name: "Java", icon: <FileCode size={20} /> },
        { name: "JavaScript", icon: <span className="text-lg font-bold">JS</span> },
        { name: "HTML", icon: <span className="text-lg font-bold">HTML</span> },
        { name: "R", icon: <span className="text-lg font-bold">R</span> }
      ]
    },
    {
      name: "Frameworks",
      icon: <Blocks size={24} className="text-primary-purple" />,
      skills: [
        { name: "CSS", icon: <span className="text-lg font-bold">CSS</span> },
        { name: "React", icon: <MonitorSmartphone size={20} /> }
      ]
    },
    {
      name: "Tools & Platforms",
      icon: <Database size={24} className="text-primary-purple" />,
      skills: [
        { name: "MySQL", icon: <Database size={20} /> },
        { name: "Tableau", icon: <LineChart size={20} /> },
        { name: "Alteryx Studio", icon: <Blocks size={20} /> },
        { name: "Oracle-DB", icon: <Database size={20} /> },
        { name: "Informatica", icon: <FileCode size={20} /> }
      ]
    },
    {
      name: "Soft Skills",
      icon: <Users size={24} className="text-primary-purple" />,
      skills: [
        { name: "Problem-Solving", icon: <Brain size={20} /> },
        { name: "Team Player", icon: <Users size={20} /> },
        { name: "Project Management", icon: <Blocks size={20} /> },
        { name: "Adaptability", icon: <MonitorSmartphone size={20} /> }
      ]
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
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {category.skills.map(skill => (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center gap-2 bg-secondary/50 p-3 rounded-lg hover:bg-primary-purple/20 transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-md">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-200">{skill.name}</span>
                  </div>
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
