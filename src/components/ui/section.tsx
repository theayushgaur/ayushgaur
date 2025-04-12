
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
    <section id={id} className="py-24 px-4 w-full max-w-6xl mx-auto">
      <div className={cn("container mx-auto", className)}>
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/50 backdrop-blur-sm border border-secondary/30">
            <span className="text-sm font-medium text-foreground">{title}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          {subtitle && <p className="mt-4 text-xl text-muted-foreground max-w-2xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
