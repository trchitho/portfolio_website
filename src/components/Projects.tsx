import { useRef, useEffect, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import fullstackChatImg from "@/assets/images/fullstack-chatapp.png";
import aiCareerImg from "@/assets/images/ai-career-system.png";
import portfolioImg from "@/assets/images/portfolio.png";
import foodhubImg from "@/assets/images/foodhub.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ─── Data ──────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    title: "FoodHub",
    subtitle: "Online Food Delivery Marketplace",
    description:
      "A full-stack food delivery platform built with Spring Boot and React. Features JWT authentication, role-based access control (Admin/User), restaurant & menu management, order tracking, and Redis caching for performance.",
    tech: ["Java 21", "Spring Boot", "Spring Security", "MySQL", "Redis", "React", "Tailwind CSS"],
    image: foodhubImg,
    github: "https://github.com/trchitho/Food-Delivery-Project",
    live: "https://food-delivery-project-chi-six.vercel.app/",
    accentHue: 250,
    badge: "Full Stack",
  },
  {
    title: "Chat App",
    subtitle: "FullStack Real-Time Chat Application",
    description:
      "A full-stack real-time chat application using MERN stack and Socket.IO. Features instant messaging, JWT authentication, image upload via Cloudinary with a modern responsive UI.",
    tech: ["React", "Socket.IO", "Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT"],
    image: fullstackChatImg,
    github: "https://github.com/trchitho/FullStack-Chat-App",
    live: null,
    accentHue: 270,
    badge: "Real-time",
  },
  {
    title: "AI Career",
    subtitle: "AI-Based Career Recommendation System",
    description:
      "A personalized career recommendation system powered by AI, built on a monorepo architecture. Integrates PostgreSQL with pgvector for vector similarity search and semantic job matching.",
    tech: ["React 18", "Vite", "FastAPI", "PostgreSQL", "pgvector", "JWT", "SQLAlchemy"],
    image: aiCareerImg,
    github: "https://github.com/trchitho/AI-Based-Career-Recommendation-System",
    live: null,
    accentHue: 290,
    badge: "AI / ML",
  },
  {
    title: "Portfolio",
    subtitle: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website with smooth animations, Motion-Driven design system, and modern UI using React, TypeScript, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: portfolioImg,
    github: "https://github.com/trchitho/portfolio_website",
    live: "https://portfolio-website-five-gamma-53.vercel.app/",
    accentHue: 230,
    badge: "Portfolio",
  },
];

/* ─── Card component ─────────────────────────────────────────────── */
interface ProjectCardProps {
  project: (typeof PROJECTS)[number];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px",
  });

  const [hovered, setHovered] = useState(false);

  const hue = project.accentHue;

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(36px) scale(0.97)",
        background: "var(--glass-bg)",
        border: `1px solid ${hovered ? `hsla(${hue},80%,65%,0.45)` : "hsla(240,6%,18%,1)"}`,
        boxShadow: hovered
          ? `0 20px 50px -12px hsla(${hue},80%,60%,0.22), 0 0 0 1px hsla(${hue},80%,65%,0.12)`
          : "0 4px 24px -8px hsla(0,0%,0%,0.4)",
        backdropFilter: "blur(12px)",
        transition: `opacity 0.65s ease-out ${index * 0.12}s, transform 0.65s ease-out ${index * 0.12}s, border-color 0.3s ease, box-shadow 0.3s ease`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      <div className="absolute top-3 left-3 z-20">
        <span
          className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide"
          style={{
            background: `hsla(${hue},80%,60%,0.18)`,
            border: `1px solid hsla(${hue},80%,60%,0.35)`,
            color: `hsl(${hue},80%,75%)`,
          }}
        >
          {project.badge}
        </span>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to bottom, transparent 30%, hsla(${hue},30%,5%,0.85))`,
            opacity: hovered ? 1 : 0.7,
          }}
          aria-hidden="true"
        />

        {/* Quick-action links on hover */}
        <div
          className="absolute top-3 right-3 flex gap-2 transition-all duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(-8px)",
          }}
        >
          <QuickAction
            href={project.github}
            label={`GitHub – ${project.title}`}
            hue={hue}
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </QuickAction>
          {project.live && (
            <QuickAction
              href={project.live}
              label={`Live demo – ${project.title}`}
              hue={hue}
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </QuickAction>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <div className="mb-1 flex items-start justify-between gap-2">
          <div>
            <h3
              className="text-xl font-bold leading-tight transition-colors duration-200"
              style={{ color: hovered ? `hsl(${hue},80%,80%)` : "hsl(0,0%,98%)" }}
            >
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">{project.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mt-3 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[11px] font-medium rounded border"
              style={{
                background: `hsla(${hue},60%,60%,0.07)`,
                borderColor: `hsla(${hue},60%,60%,0.18)`,
                color: `hsl(${hue},60%,70%)`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex items-center gap-3 pt-3 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code – ${project.title}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium cursor-pointer transition-colors duration-200 text-muted-foreground hover:text-foreground"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            Source
          </a>

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo – ${project.title}`}
              className="ml-auto inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{
                background: `linear-gradient(135deg, hsl(${hue},80%,55%), hsl(${hue + 20},90%,68%))`,
                color: "#fff",
                boxShadow: `0 4px 14px -4px hsla(${hue},80%,60%,0.45)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = `0 8px 20px -4px hsla(${hue},80%,60%,0.6)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 4px 14px -4px hsla(${hue},80%,60%,0.45)`;
              }}
            >
              Live Demo
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : (
            <span className="ml-auto text-xs text-muted-foreground/50 italic">
              Private / WIP
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── Quick action button ────────────────────────────────────────── */
interface QuickActionProps {
  href: string;
  label: string;
  hue: number;
  children: React.ReactNode;
}

const QuickAction = ({ href, label, hue, children }: QuickActionProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2 rounded-lg cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    style={{
      background: "hsla(0,0%,5%,0.75)",
      backdropFilter: "blur(8px)",
      border: `1px solid hsla(${hue},80%,60%,0.3)`,
      color: `hsl(${hue},80%,75%)`,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = `hsla(${hue},80%,60%,0.2)`;
      e.currentTarget.style.transform = "scale(1.08)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "hsla(0,0%,5%,0.75)";
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    {children}
  </a>
);

/* ─── Section header ─────────────────────────────────────────────── */
const SectionHeader = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="text-center mb-16"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      {/* Overline label */}
      <p
        className="text-sm font-semibold tracking-[0.18em] uppercase mb-3"
        style={{ color: "hsl(250,84%,70%)" }}
      >
        What I've built
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Featured{" "}
        <span className="bg-gradient-primary bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
        A selection of projects that showcase my approach to full-stack development.
      </p>

      {/* Decorative rule */}
      <div className="flex items-center justify-center gap-3 mt-6" aria-hidden="true">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50 rounded-full" />
        <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50 rounded-full" />
      </div>
    </div>
  );
};

/* ─── Main section ───────────────────────────────────────────────── */
const Projects = () => (
  <section id="projects" className="py-24 px-6 relative overflow-hidden">
    {/* Subtle background accent */}
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse, hsla(250,84%,60%,0.05) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
      aria-hidden="true"
    />

    <div className="max-w-6xl mx-auto relative z-10">
      <SectionHeader />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Footer CTA */}
      <MoreProjectsCTA />
    </div>
  </section>
);

/* ─── More projects CTA ──────────────────────────────────────────── */
const MoreProjectsCTA = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="text-center mt-14"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(18px)",
        transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
      }}
    >
      <a
        href="https://github.com/trchitho"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm cursor-pointer border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        style={{
          background: "hsla(250,84%,60%,0.07)",
          borderColor: "hsla(250,84%,60%,0.28)",
          color: "hsl(250,84%,72%)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "hsla(250,84%,60%,0.16)";
          e.currentTarget.style.borderColor = "hsla(250,84%,60%,0.55)";
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 8px 24px -6px hsla(250,84%,60%,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "hsla(250,84%,60%,0.07)";
          e.currentTarget.style.borderColor = "hsla(250,84%,60%,0.28)";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <Github className="h-4 w-4" aria-hidden="true" />
        View all projects on GitHub
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
};

export default Projects;
