import { useEffect, useRef } from "react";

const Volunteering = () => {
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
    <section id="volunteering" className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div
          ref={sectionRef}
          className="max-w-3xl mx-auto opacity-0 translate-y-4 transition-all duration-700"
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-800 pb-2">Volunteering & Leadership Experience</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Core Team Member at OpinHacks Hackathon</h3>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li className="text-lg text-muted-foreground">
                Organized a hackathon with over 250 participants, fostering innovation and teamwork.
              </li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Flutter Lead at Google Developer Student Club (GDSC)</h3>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li className="text-lg text-muted-foreground">
                Led training sessions for more than 200 students on Flutter app development and development principles.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
