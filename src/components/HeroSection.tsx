import { ArrowDownCircle, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-darker">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary-purple/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary-purple/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Left side - Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
            <h1 className="text-2xl mb-2 text-primary-purple animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Hello, I'm
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Ashish Raj
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Data Science Engineer
            </h3>
            
            <div className="flex gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <a 
                href="https://www.linkedin.com/in/9ashishraj/" 
                target="_blank"
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="bg-secondary p-3 rounded-full hover:bg-primary-purple transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Ashish1379" 
                target="_blank"
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="bg-secondary p-3 rounded-full hover:bg-primary-purple transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:ashishrajbarmawal23@gmail.com" 
                aria-label="Email"
                className="bg-secondary p-3 rounded-full hover:bg-primary-purple transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
              <Button className="btn-primary flex items-center gap-2" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a 
                  href="https://drive.google.com/file/d/1AXLg9yNy0xwWIUNgYfE7kyNMkfEUUT8W/view" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-primary-purple/30 rounded-full blur-md"></div>
              <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-primary-purple/50">
                <img 
                  src="/lovable-uploads/6b9499a3-81c3-44f2-9a42-77b17c7dd6b3.png" 
                  alt="Ashish Raj" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-purple transition-colors duration-300 animate-bounce"
      >
        <ArrowDownCircle size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
