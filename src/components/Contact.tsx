import { useEffect, useRef } from "react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("translate-y-4");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 px-4 md:px-6" id="contact">
      <div className="container mx-auto">
        <div
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center opacity-0 translate-y-4 transition-all duration-700"
        >
          <div className="inline-block px-6 py-2 mb-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-base font-medium text-foreground">Contact</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-12">Get in Touch</h2>
          
          <p className="text-xl text-muted-foreground mb-4">
            Want to chat? Just shoot me a dm{" "}
            <a 
              href="https://x.com/theayushgaur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <AnimatedGradientText className="font-medium">
                with a direct question on twitter
              </AnimatedGradientText>
            </a>{" "}
            and I'll respond whenever I can. I will ignore all soliciting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
