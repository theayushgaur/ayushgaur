import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = offset / height;
      
      setScrollProgress(progress);
      
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  const navbarHeight = scrolled ? "py-3" : "py-5";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/70 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className={`container mx-auto px-4 md:px-6 flex items-center justify-between ${navbarHeight}`}>
        <Link 
          to="/" 
          className="text-lg font-medium hover:opacity-80 transition-opacity"
        >
          Andreas Chronark
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#" 
            onClick={scrollToSection("home")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </a>
          <a 
            href="#experience" 
            onClick={scrollToSection("experience")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </a>
          <a 
            href="#projects" 
            onClick={scrollToSection("projects")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a 
            href="#about" 
            onClick={scrollToSection("about")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={scrollToSection("contact")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
        
        <button className="md:hidden text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
      
      {/* Colorful progress bar positioned below the navbar */}
      <ScrollProgress 
        height={2.5}
        gradient={true}
        position="bottom"
      />
    </header>
  );
};

export default Navbar;
