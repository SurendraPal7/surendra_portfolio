
import { Book, Code, Database, Terminal } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-darker relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6 animate-fade-up">
            <p className="text-gray-300 leading-relaxed">
I'm Surendra Pal, a passionate MERN Stack Developer with a strong foundation in computer science fundamentals and proficiency in multiple programming languages including C, C++, Java, JavaScript, as well as frameworks like React.js and Node.js.            </p>
            <p className="text-gray-300 leading-relaxed">
pursuing a Bachelor's degree in Computer Science and Engineering from Lovely Professional University, I specialize in building robust and scalable web applications by leveraging both frontend and backend technologies.            </p>
            <p className="text-gray-300 leading-relaxed">
My experience includes developing dynamic user interfaces, RESTful APIs, and full-stack web applications that deliver seamless user experiences. I'm continuously exploring new technologies and best practices to enhance my development skills and deliver high-quality software solutions.            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* About cards */}
            <div className="bg-secondary/30 p-6 rounded-lg border border-secondary/50 hover:border-primary-purple/50 animated-card">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-purple/20 rounded-md mr-4">
                  <Code className="text-primary-purple" size={24} />
                </div>
                <h3 className="text-xl font-medium">Development</h3>
              </div>
              <p className="text-gray-400">
                Experienced in C, C++, Java, JavaScript, and more.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg border border-secondary/50 hover:border-primary-purple/50 animated-card">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-purple/20 rounded-md mr-4">
                  <Database className="text-primary-purple" size={24} />
                </div>
                <h3 className="text-xl font-medium">Full Stack Development</h3>
              </div>
              <p className="text-gray-400">
Skilled in MERN stack, Git, REST APIs, Postman, and MongoDB Compass. Experienced in full-stack web development.</p>    
        </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg border border-secondary/50 hover:border-primary-purple/50 animated-card">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-purple/20 rounded-md mr-4">
                  <Terminal className="text-primary-purple" size={24} />
                </div>
                <h3 className="text-xl font-medium">Problem Solving</h3>
              </div>
              <p className="text-gray-400">
                Solved 150+ coding challenges on platforms like LeetCode and GeeksForGeeks.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg border border-secondary/50 hover:border-primary-purple/50 animated-card">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-purple/20 rounded-md mr-4">
                  <Book className="text-primary-purple" size={24} />
                </div>
                <h3 className="text-xl font-medium">Learning</h3>
              </div>
              <p className="text-gray-400">
Continuous learner with certifications in MERN stack development, web technologies, and related tools.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
