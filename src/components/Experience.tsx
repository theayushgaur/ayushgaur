import { CalendarIcon, BriefcaseIcon, MapPinIcon } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Flutter Developer",
    company: "MythyaVerse",
    location: "Noida, UP",
    period: "June 2024 – Present",
    description: [
      "Designed VRPlaced and deployed on Playstore, a state-of-the-art AI-driven virtual interview application utilizing OpenAI APIs and Unity 3D, boosting interview success rates by 40%.",
      "Implemented Provider for state management, simplifying app complexity and enhancing modularity, leading to a 25% increase in code reusability.",
      "Established a robust Firebase backend for real-time data storage and processing, improving reliability by 30%.",
      "Developed Meri Sehat, an AI-based health analytics app for government employees, integrating ABHA health IDs and providing real-time health insights for over 10,000 users.",
      "Received accolades at the Indian Mobile Congress for pioneering AI-powered applications."
    ]
  },
  {
    title: "Flutter Developer",
    company: "Quvi Ltd.",
    location: "Raipur, CG",
    period: "Sep 2023 – April 2024",
    description: [
      "Developed a custom QR code solution, enhancing technician workflow efficiency by 30%.",
      "Implemented deep-linking navigation, improving customer engagement by 15% and significantly reducing bounce rates.",
      "Enhanced app performance using Riverpod for state management, ensuring faster response times."
    ]
  },
  {
    title: "Mobile Developer Intern",
    company: "Aural",
    location: "Gurugram",
    period: "Aug 2023 – Sep 2023",
    description: [
      "Deployed WebRTC-based real-time communication, reducing average response times by 40% and improving call stability.",
      "Refined Flutter UI components, leading to a 25% increase in user satisfaction metrics.",
      "Resolved over 30 critical bugs and optimized app load times, enhancing efficiency by 20%."
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Bharat Electronics Ltd.",
    location: "Delhi",
    period: "Jun 2023 – Aug 2023",
    description: [
      "Assisted in developing and maintaining enterprise-level software applications.",
      "Collaborated with senior developers to implement new features and fix bugs.",
      "Participated in code reviews and team meetings to improve development processes."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="w-full max-w-5xl mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <BriefcaseIcon className="h-8 w-8" />
        Professional Experience
      </h2>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-card p-6 rounded-lg border border-border">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-muted-foreground font-medium">{exp.company}</p>
              </div>
              <div className="space-y-1 text-right">
                <div className="flex items-center justify-end text-muted-foreground">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center justify-end text-muted-foreground text-sm">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            
            <ul className="list-disc list-inside space-y-2 mb-4">
              {exp.description.map((item, i) => (
                <li key={i} className="text-muted-foreground">
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            
            {exp.technologies && (
              <div>
                <p className="font-medium mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 