import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Dart'n Doom",
    description: "A fast-paced 2D action game built with Flutter and Flame engine, featuring retro-inspired graphics and responsive gameplay mechanics.",
    tags: ["Flutter", "Flame", "Dart", "Game Development"],
    link: "https://github.com/theayushgaur/Dart-n-Doom"
  },
  {
    title: "VRPlaced",
    description: "State-of-the-art AI-driven virtual interview application utilizing OpenAI APIs and Unity 3D, helping candidates improve interview success rates.",
    tags: ["Flutter", "Unity 3D", "OpenAI", "Firebase"],
    link: "https://vrplaced.ai/"
  },
  {
    title: "Cybria",
    description: "An AI-powered online assistant app made with Flutter. Integrates ChatGPT and DALL·E 2 LLM models for dynamic chat-based interactions and creative AI-generated visuals.",
    tags: ["Flutter", "ChatGPT API", "DALL·E 2", "AI Assistant"],
    link: "https://github.com/theayushgaur/Cybria"
  },
  {
    title: "Quvi Service App",
    description: "A comprehensive technician service management platform with custom QR code solutions, deep-linking navigation, and optimized workflow systems to enhance service efficiency.",
    tags: ["Flutter", "QR Code", "Deep Linking", "Riverpod"],
    link: "/projects/quvi-service"
  },
  {
    title: "AnswerFlux",
    description: "Developed a cross-platform AI-powered Q&A app using Flutter for the frontend and FastAPI with Gemini AI for natural language processing. The stack also includes a custom Travily server, all-MiniLM-L6-v2 Sentence Transformer for semantic search, and websockets for real-time communication.",
    tags: ["Flutter", "ML", "Firebase", "REST API"],
    link: "/projects/answerflux"
  },
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with React, TailwindCSS, and Framer Motion. Features smooth animations, dark mode, and interactive UI components.",
    tags: ["React", "TailwindCSS", "Framer Motion", "TypeScript"],
    link: "https://github.com/theayushgaur/flutter-web-canvas"
  },
  {
    title: "Insightopia",
    description: " A Flutter-based news reader app built in my personal time. It fetches international news via NewsAPI, displays headlines by category/country, and allows reading full articles in-app. Features include Firebase authentication, personalized notifications, Provider for state management, and light/dark themes designed in Figma. This project enhanced my skills in Flutter, APIs, and mobile development practices.",
    tags: ["Flutter", "Data Visualization", "Rest API", "Charts"],
    link: "/projects/insightopia"
  },
  {
    title: "Monstarev",
    description: "Designed a web app featuring 20+ reusable animated components built with Flutter, saving developers 100+hours of coding.",
    tags: ["Flutter", "Gamification", "Firebase", "Provider"],
    link: "/projects/monstarev"
  },
  {
    title: "Docker Flutter Integration",
    description: "A comprehensive solution for containerizing Flutter applications, enabling consistent development environments and simplified CI/CD pipelines.",
    tags: ["Docker", "Flutter", "DevOps", "CI/CD"],
    link: "https://github.com/theayushgaur/DockerFlutterWebsite"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
