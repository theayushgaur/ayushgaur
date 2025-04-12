
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

const Contact = () => {
  return (
    <Section 
      id="contact" 
      title="Get in Touch"
      subtitle="Want to work together or have a question? Reach out through any of these channels."
    >
      <Card className="border border-secondary/50 bg-secondary/10 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-xl mb-6">
                Want to chat? Just shoot me a DM{" "}
                <a 
                  href="https://x.com/theayushgaur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <AnimatedGradientText className="font-medium">
                    with a direct question on Twitter
                  </AnimatedGradientText>
                </a>{" "}
                and I'll respond whenever I can.
              </p>
              <p className="text-muted-foreground">I will ignore all soliciting.</p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="mailto:contact@ayushgaur.dev" 
                className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-secondary/30"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@ayushgaur.dev</span>
              </a>
              
              <a 
                href="https://twitter.com/theayushgaur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-secondary/30"
              >
                <Twitter className="h-5 w-5 text-primary" />
                <span>@theayushgaur</span>
              </a>
              
              <a 
                href="https://github.com/theayushgaur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-secondary/30"
              >
                <Github className="h-5 w-5 text-primary" />
                <span>theayushgaur</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/theayushgaur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-secondary/30"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <span>theayushgaur</span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};

export default Contact;
