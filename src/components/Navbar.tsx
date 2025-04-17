
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  title: string;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ href, title, className, onClick }: NavLinkProps) => (
  <a
    href={href}
    className={cn(
      "text-gray-300 hover:text-primary-purple transition-colors duration-300",
      className
    )}
    onClick={onClick}
  >
    {title}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-darker/95 backdrop-blur-sm shadow-md py-3" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-white">
          Ashish<span className="text-primary-purple">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <NavLink href="#home" title="Home" />
          <NavLink href="#about" title="About" />
          <NavLink href="#skills" title="Skills" />
          <NavLink href="#projects" title="Projects" />
          <NavLink href="#education" title="Education" />
          <NavLink href="#contact" title="Contact" />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-darker/95 backdrop-blur-sm py-4 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col gap-4">
            <NavLink
              href="#home"
              title="Home"
              className="py-2"
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              href="#about"
              title="About"
              className="py-2"
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              href="#skills"
              title="Skills"
              className="py-2"
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              href="#projects"
              title="Projects"
              className="py-2"
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              href="#education"
              title="Education"
              className="py-2"
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              href="#contact"
              title="Contact"
              className="py-2"
              onClick={() => setIsOpen(false)}
            />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
