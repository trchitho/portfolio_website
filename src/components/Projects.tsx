import { useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import fullstackChatImg from "@/assets/images/fullstack-chatapp.png";
import aiCareerImg from "@/assets/images/ai-career-system.png";
import portfolioImg from "@/assets/images/portfolio.png";
import foodhubImg from "@/assets/images/foodhub.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PROJECTS = [
  {
    title: "FoodHub",
    subtitle: "Online Food Delivery Marketplace",
    description: "A full-stack food delivery platform built with Spring Boot and React. Features JWT authentication, role-based access control, restaurant & menu management, order tracking, and Redis caching for performance.",
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
    description: "A full-stack real-time chat application using MERN stack and Socket.IO. Features instant messaging, JWT authentication, image upload via Cloudinary with a modern responsive UI.",
    tech: ["React", "Socket.IO", "Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT"],
    image: fullstackChatImg,
    github: "https://github.com/trchitho/FullStack-Chat-App",
    live: "https://fullstack-chat-app-ub68.onrender.com/",
    accentHue: 262,
    badge: "Real-time",
  },
  {
    title: "AI Career",
    subtitle: "AI-Based Career Recommendation System",
    description: "A personalized career recommendation system powered by AI, built on a monorepo architecture. Integrates PostgreSQL with pgvector for vector similarity search and semantic job matching.",
    tech: ["React 18", "Vite", "FastAPI", "PostgreSQL", "pgvector", "JWT", "SQLAlchemy"],
    image: aiCareerImg,
    github: "https://github.com/trchitho/AI-Based-Career-Recommendation-System",
    live: null,
    accentHue: 220,
    badge: "AI / ML",
  },
  {
    title: "Portfolio",
    subtitle: "Personal Portfolio Website",
    description: "A responsive personal portfolio website with smooth animations, Motion-Driven design system, and modern UI using React, TypeScript, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: portfolioImg,
    github: "https://github.com/trchitho/portfolio_website",
    live: null,
    accentHue: 240,
    badge: "Portfolio",
  },
];

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[number]; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  const [hovered, setHovered] = useState(false);
  const h = project.accentHue;
  const hasLiveDemo = Boolean(project.live);
  const openProject = () => {
    if (!project.live) return;
    window.open(project.live, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={ref}
      role={hasLiveDemo ? "link" : undefined}
      tabIndex={hasLiveDemo ? 0 : undefined}
      aria-label={hasLiveDemo ? `Open ${project.title} live demo` : undefined}
      className={`group relative rounded-2xl overflow-hidden min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        hasLiveDemo ? "cursor-pointer" : "cursor-default"
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
        transition: `opacity 0.6s ease-out ${index * 0.11}s, transform 0.6s ease-out ${index * 0.11}s, box-shadow 0.3s ease, border-color 0.3s ease`,
        background: "var(--surface-card)",
        border: `1px solid ${hovered ? `hsla(${h},65%,55%,0.40)` : "var(--border-card)"}`,
        boxShadow: hovered ? `var(--card-shadow-hover)` : "var(--card-shadow)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={hasLiveDemo ? openProject : undefined}
      onKeyDown={(e) => {
        if (hasLiveDemo && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          openProject();
        }
      }}
    >
      {/* Badge */}
      <div className="absolute top-3 left-3 z-20">
        <span
          className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide"
          style={{
            background: `hsla(${h},65%,55%,0.12)`,
            border: `1px solid hsla(${h},65%,55%,0.30)`,
            color: `hsl(${h},65%,var(--badge-chip-l, 38%))`,
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
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to bottom, transparent 40%, hsla(${h},20%,8%,0.65))`,
            opacity: hovered ? 0.85 : 0.55,
          }}
          aria-hidden="true"
        />

        {/* Quick actions */}
        <div
          className="absolute top-3 right-3 flex gap-2 transition-all duration-300"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(-8px)" }}
        >
          <QuickAction href={project.github} label={`Source code – ${project.title}`} hue={h}>
            <Github className="h-4 w-4" aria-hidden="true" />
          </QuickAction>
          {project.live && (
            <QuickAction href={project.live} label={`Live demo – ${project.title}`} hue={h}>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </QuickAction>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-xl font-bold leading-tight transition-colors duration-200 mb-0.5"
          style={{ color: hovered ? `hsl(${h},65%,55%)` : "hsl(var(--foreground))" }}
        >
          {project.title}
        </h3>
        <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>{project.subtitle}</p>
        <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: "var(--text-body)" }}>
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[11px] font-medium rounded border"
              style={{
                background: `hsla(${h},55%,55%,0.07)`,
                borderColor: `hsla(${h},55%,55%,0.20)`,
                color: `hsl(${h},55%,var(--badge-chip-l, 38%))`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-3 pt-3" style={{ borderTop: "1px solid var(--border-divider)" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code – ${project.title}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium cursor-pointer transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--foreground)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            Source
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo – ${project.title}`}
              className="min-[420px]:ml-auto inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-white"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: `0 3px 12px -3px hsla(${h},65%,50%,0.38)`,
              }}
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = `0 6px 18px -3px hsla(${h},65%,50%,0.52)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 3px 12px -3px hsla(${h},65%,50%,0.38)`;
              }}
            >
              Live Demo
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const QuickAction = ({ href, label, hue, children }: { href: string; label: string; hue: number; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2 rounded-lg cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    style={{
      background: "var(--btn-ghost-bg)",
      backdropFilter: "blur(8px)",
      border: `1px solid hsla(${hue},65%,55%,0.25)`,
      color: `hsl(${hue},65%,55%)`,
    }}
    onClick={(e) => e.stopPropagation()}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = `hsla(${hue},65%,55%,0.18)`;
      e.currentTarget.style.transform = "scale(1.08)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "var(--btn-ghost-bg)";
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    {children}
  </a>
);

const SectionHeader = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.25 });
  return (
    <div
      ref={ref}
      className="text-center mb-16"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(22px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      <p className="text-sm font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "var(--text-overline)" }}>
        What I've built
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
        Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
      </h2>
      <p className="max-w-md mx-auto text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
        A selection of projects that showcase my approach to full-stack development.
      </p>
      <div className="flex items-center justify-center gap-3 mt-6" aria-hidden="true">
        <div className="h-px w-16 rounded-full" style={{ background: "linear-gradient(to right, transparent, hsl(var(--primary)/0.4))" }} />
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
        <div className="h-px w-16 rounded-full" style={{ background: "linear-gradient(to left, transparent, hsl(var(--primary)/0.4))" }} />
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ background: "var(--surface-page-alt)" }}>
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100vw,600px)] h-[280px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse, hsla(250,70%,55%,0.05) 0%, transparent 70%)", filter: "blur(40px)" }}
      aria-hidden="true"
    />
    <div className="max-w-6xl mx-auto relative z-10">
      <SectionHeader />
      <div className="grid min-w-0 md:grid-cols-2 gap-6 lg:gap-8">
        {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>
      <MoreProjectsCTA />
    </div>
  </section>
);

const MoreProjectsCTA = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.5 });
  return (
    <div
      ref={ref}
      className="text-center mt-14"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
      }}
    >
      <a
        href="https://github.com/trchitho"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex max-w-full items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm cursor-pointer border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        style={{
          background: "var(--badge-bg)",
          borderColor: "var(--badge-border)",
          color: "var(--badge-text)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--btn-ghost-bg-hover)";
          e.currentTarget.style.borderColor = "var(--btn-ghost-border-hover)";
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 8px 24px -6px hsla(250,70%,55%,0.22)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--badge-bg)";
          e.currentTarget.style.borderColor = "var(--badge-border)";
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
