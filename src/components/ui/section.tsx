
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title: string;
  className?: string;
  children: ReactNode;
  subtitle?: string;
}

export function Section({ id, title, className, children, subtitle }: SectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 px-4 md:px-6 w-full max-w-6xl mx-auto">
      <div className={cn("container mx-auto", className)}>
        <div className="mb-10 md:mb-16 max-w-3xl">
          <div className="inline-block px-3 py-1 mb-3 md:px-4 md:py-1.5 md:mb-4 rounded-full bg-secondary/50 backdrop-blur-sm border border-secondary/30">
            <span className="text-sm font-medium text-foreground">{title}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">{title}</h2>
          {subtitle && <p className="mt-3 md:mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
