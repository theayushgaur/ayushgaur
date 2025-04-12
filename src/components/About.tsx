
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award } from "lucide-react";

const About = () => {
  return (
    <Section 
      id="about" 
      title="Community Involvement"
      subtitle="My contributions to developer communities and leadership roles."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card className="border border-secondary/50 bg-secondary/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 h-full">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <Award className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <h3 className="text-lg md:text-xl font-bold">Core Team Member at OpinHacks Hackathon</h3>
            </div>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                <span className="text-sm md:text-base text-muted-foreground">
                  Organized a hackathon with over 250 participants, fostering innovation and teamwork.
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                <span className="text-sm md:text-base text-muted-foreground">
                  Collaborated with sponsors and mentors to create an enriching event experience.
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                <span className="text-sm md:text-base text-muted-foreground">
                  Managed logistics and technical resources for 48+ hours of continuous innovation.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="border border-secondary/50 bg-secondary/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 h-full">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <Users className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <h3 className="text-lg md:text-xl font-bold">Flutter Lead at Google Developer Student Club</h3>
            </div>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                <span className="text-sm md:text-base text-muted-foreground">
                  Led training sessions for more than 200 students on Flutter app development.
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                <span className="text-sm md:text-base text-muted-foreground">
                  Facilitated workshops and hands-on coding sessions to build practical skills.
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                <span className="text-sm md:text-base text-muted-foreground">
                  Mentored junior developers in mobile application architecture and best practices.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default About;
