import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { GitHubStarButton } from "@/components/ui/github-star-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { HyperText } from "@/components/magicui/hyper-text";

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
          <HyperText className="text-lg font-medium">
            Ayush Gaur
          </HyperText>
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
            href="#skills" 
            onClick={scrollToSection("skills")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </a>
          <a 
            href="#volunteering" 
            onClick={scrollToSection("volunteering")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Volunteering
          </a>
          <a 
            href="#contact" 
            onClick={scrollToSection("contact")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
        
        <div className="flex items-center gap-2">
          <GitHubStarButton />
          <ThemeToggle />
        </div>
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
