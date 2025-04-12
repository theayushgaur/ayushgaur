
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Laptop, Tools } from "lucide-react";

const Skills = () => {
  return (
    <Section 
      id="skills" 
      title="Skills & Expertise"
      subtitle="My technical toolkit and areas of specialization."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border border-secondary/50 bg-secondary/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Programming & Framework</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Dart", "Kotlin", "Swift", "Java", "Python", "Flutter", "SwiftUI", "HTML", "CSS"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-secondary/30 text-foreground text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="border border-secondary/50 bg-secondary/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Tools className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Developer Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Firebase", "AWS", "Google Cloud", "REST APIs", "GraphQL", "Material Design", 
                "Responsive Design", "Figma", "Adobe XD", "CI/CD", "Git"
              ].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-secondary/30 text-foreground text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="border border-secondary/50 bg-secondary/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Laptop className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">State Management</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["RiverPod", "Bloc", "Provider", "GetX", "MobX", "Redux"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-secondary/30 text-foreground text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-8 border border-secondary/50 bg-secondary/10 backdrop-blur-sm">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Certifications</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <p className="text-foreground">
                Java And Data Structures | <span className="font-semibold">Coding Ninja</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <p className="text-foreground">
                CS50's Web Programming with Python and JavaScript | <span className="font-semibold">Harvard University</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <p className="text-foreground">
                Android App Development Masterclass using Kotlin | <span className="font-semibold">Udemy</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};

export default Skills;
