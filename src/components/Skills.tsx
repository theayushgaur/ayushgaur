import { useEffect, useRef } from "react";

const Skills = () => {
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
    <section id="skills" className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div
          ref={sectionRef}
          className="max-w-3xl mx-auto opacity-0 translate-y-4 transition-all duration-700"
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-800 pb-2">SKILLS</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold inline-block">Programming & Framework:</h3>
              <p className="inline-block ml-2 text-lg text-muted-foreground">
                Dart, Kotlin, Swift, Java, Python, Flutter, SwiftUI, HTML, CSS
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold inline-block">Developer Tools:</h3>
              <p className="inline-block ml-2 text-lg text-muted-foreground">
                Firebase, AWS (EC2, S3, ML, Lambda), Google Cloud, REST APIs, GraphQL, Material Design, 
                Responsive Design, Figma, Adobe XD, CI/CD, Postman, Git, Unit/Widget Testing, RiverPod, Bloc, Provider, Getx
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold inline-block">Certification:</h3>
              <p className="inline-block ml-2 text-lg text-muted-foreground">
                Java And Data Structures | <span className="font-semibold">Coding Ninja</span>, CS50's Web Programming with Python and JavaScript | 
                <span className="font-semibold"> Harvard University</span>, Android App Development Masterclass using Kotlin | <span className="font-semibold">Udemy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 