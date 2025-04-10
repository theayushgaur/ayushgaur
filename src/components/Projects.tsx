
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Upstash Redis",
    description: "REST API for Redis with built-in connection pooling and auto-reconnects.",
    tags: ["TypeScript", "Redis", "API"],
    link: "/projects/upstash-redis"
  },
  {
    title: "Terraform Parser",
    description: "A parser for Terraform HCL files that outputs a typed JSON structure.",
    tags: ["Rust", "Infrastructure", "CLI"],
    link: "/projects/terraform-parser"
  },
  {
    title: "Next.js Authentication",
    description: "A simple, secure, and scalable authentication system for Next.js applications.",
    tags: ["Next.js", "Authentication", "Security"],
    link: "/projects/nextjs-auth"
  },
  {
    title: "React State Management",
    description: "A lightweight state management solution for React applications.",
    tags: ["React", "TypeScript", "State Management"],
    link: "/projects/react-state"
  },
  {
    title: "Database ORM",
    description: "Type-safe database access with minimal overhead and maximal flexibility.",
    tags: ["SQL", "TypeScript", "ORM"],
    link: "/projects/database-orm"
  },
  {
    title: "ML Deployment Framework",
    description: "End-to-end framework for deploying machine learning models in production.",
    tags: ["Python", "ML", "DevOps"],
    link: "/projects/ml-deployment"
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
