
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-dark border-t border-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© {currentYear} Ashish Raj. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/9ashishraj/" 
              target="_blank"
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-primary-purple transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/Ashish1379" 
              target="_blank"
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="text-gray-400 hover:text-primary-purple transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:ashishrajbarmawal23@gmail.com" 
              aria-label="Email"
              className="text-gray-400 hover:text-primary-purple transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
