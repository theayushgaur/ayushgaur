import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Volunteering from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Particles />
      <Navbar />
      <main className="flex flex-col items-center">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
