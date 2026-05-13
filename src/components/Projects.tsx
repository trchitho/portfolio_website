import { Button } from "@/components/ui/enhanced-button";
import { ExternalLink, Github } from "lucide-react";
import fullstackChatImg from "@/assets/images/fullstack-chatapp.png";
import aiCareerImg from "@/assets/images/ai-career-system.png";
import portfolioImg from "@/assets/images/portfolio.png";
import foodhubImg from "@/assets/images/foodhub.png";

const Projects = () => {
  const projects = [
    {
      title: "FoodHub – Online Food Delivery Marketplace",
      description: "A full-stack food delivery platform built with Spring Boot and React. Features JWT authentication, role-based access control (Admin/User), restaurant & menu management, order tracking, and Redis caching for performance.",
      tech: ["Java 21", "Spring Boot", "Spring Security", "JPA/Hibernate", "MySQL", "Redis", "JWT", "React", "Tailwind CSS", "Axios"],
      image: foodhubImg,
      github: "https://github.com/trchitho/Food-Delivery-Project",
      live: "#"
    },
    {
      title: "FullStack Chat Application",
      description: "A full-stack real-time chat application using MERN stack (MongoDB, Express, React, Node.js) and Socket.IO. Features instant messaging, JWT authentication, image upload via Cloudinary with a modern responsive UI.",
      tech: ["React", "Tailwind CSS", "Socket.IO", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
      image: fullstackChatImg,
      github: "https://github.com/trchitho/FullStack-Chat-App",
      live: "#"
    },
    {
      title: "AI-Based Career Recommendation System",
      description: "A personalized career recommendation system powered by AI, built on a monorepo architecture with frontend (React/Vite) and backend (FastAPI). Integrates PostgreSQL with pgvector for vector similarity search.",
      tech: ["React 18", "Vite", "Tailwind CSS", "FastAPI", "PostgreSQL", "pgvector", "JWT", "SQLAlchemy"],
      image: aiCareerImg,
      github: "https://github.com/trchitho/AI-Based-Career-Recommendation-System",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website with smooth animations and modern design using React and Tailwind CSS.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: portfolioImg,
      github: "https://github.com/trchitho/portfolio_website",
      live: "https://portfolio-website-five-gamma-53.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-glass border border-glass rounded-2xl overflow-hidden backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-muted/30 rounded border border-muted/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  {project.live !== "#" && (
                    <Button
                      variant="gradient"
                      size="sm"
                      className="group"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
