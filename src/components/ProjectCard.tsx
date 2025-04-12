
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  delay?: number;
};

const ProjectCard = ({ title, description, tags, link, delay = 0 }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100");
              entry.target.classList.remove("translate-y-4");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <Link to={link}>
      <Card 
        ref={cardRef}
        className="group h-full opacity-0 translate-y-4 transition-all duration-300 border border-secondary/50 bg-secondary/10 backdrop-blur-sm hover:border-primary/50 overflow-hidden"
      >
        <CardContent className="p-4 md:p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-medium transition-colors group-hover:text-primary`}>{title}</h3>
            <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
            </span>
          </div>
          <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs rounded-full px-1.5 py-0.5 md:px-2 md:py-0.5 bg-secondary/30 text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
