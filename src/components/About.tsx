import { useEffect, useRef } from "react";

const About = () => {
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
    <section id="about" className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div
          ref={sectionRef}
          className="max-w-3xl mx-auto opacity-0 translate-y-4 transition-all duration-700"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-4">
              I'm a software engineer based in Berlin, Germany, specializing in building (and occasionally designing) 
              exceptional digital experiences. Currently, I'm focused on building developer infrastructure products at Chronark.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              I started my journey as a software developer over 10 years ago, working with a wide range of 
              technologies and frameworks. I've built products for companies ranging from startups to Fortune 500 enterprises.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              My main focus these days is building products and leading projects for our clients at Chronark. 
              In my free time, I've also released open source projects that help other developers.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              When I'm not at the computer, I'm usually playing music, reading, or exploring the outdoors. I'm always 
              interested in new projects, so feel free to reach out!
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Technologies I've been working with:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
              <div className="flex items-center space-x-2">
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                <span>JavaScript (ES6+)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                <span>React & Next.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                <span>Node.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                <span>Rust</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                <span>Go</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                <span>Python</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                <span>SQL & NoSQL</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                <span>AWS & GCP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
