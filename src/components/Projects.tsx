import { useState } from "react";
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
      "A full-stack food delivery platform built with Spring Boot and React. Features JWT authentication, role-based access control, restaurant & menu management, order tracking, and Redis caching for performance.",
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
    accentHue: 262,
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
    accentHue: 220,
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
    accentHue: 240,
    badge: "Portfolio",
  },
];

/* ─── Card ───────────────────────────────────────────────────────── */
interface ProjectCardProps {
  project: (typeof PROJECTS)[number];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  });
  const [hovered, setHovered] = useState(false);
  const h = project.accentHue;

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
        transition: `opacity 0.6s ease-out ${index * 0.11}s, transform 0.6s ease-out ${index * 0.11}s, box-shadow 0.3s ease, border-color 0.3s ease`,
        background: "#ffffff",
        border: `1px solid ${hovered ? `hsla(${h},65%,50%,0.35)` : "hsl(220,18%,88%)"}`,
        boxShadow: hovered
          ? `0 16px 48px -12px hsla(${h},65%,50%,0.20), 0 2px 8px hsla(220,20%,20%,0.06)`
          : "0 2px 16px -4px hsla(220,20%,20%,0.08), 0 1px 3px hsla(220,20%,20%,0.05)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      <div className="absolute top-3 left-3 z-20">
        <span
          className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide"
          style={{
            background: `hsla(${h},65%,50%,0.10)`,
            border: `1px solid hsla(${h},65%,50%,0.28)`,
            color: `hsl(${h},65%,36%)`,
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
        {/* Light gradient overlay at bottom */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to bottom, transparent 40%, hsla(${h},20%,96%,0.7))`,
            opacity: hovered ? 1 : 0.5,
          }}
          aria-hidden="true"
        />

        {/* Quick actions */}
        <div
          className="absolute top-3 right-3 flex gap-2 transition-all duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(-8px)",
          }}
        >
          <QuickAction href={project.github} label={`GitHub – ${project.title}`} hue={h}>
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
          style={{ color: hovered ? `hsl(${h},65%,36%)` : "hsl(224,24%,10%)" }}
        >
          {project.title}
        </h3>
        <p className="text-xs mb-3" style={{ color: "hsl(220,12%,52%)" }}>
          {project.subtitle}
        </p>
        <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: "hsl(220,12%,38%)" }}>
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[11px] font-medium rounded border"
              style={{
                background: `hsla(${h},55%,50%,0.06)`,
                borderColor: `hsla(${h},55%,50%,0.2)`,
                color: `hsl(${h},55%,34%)`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div
          className="flex items-center gap-3 pt-3"
          style={{ borderTop: "1px solid hsl(220,18%,92%)" }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code – ${project.title}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium cursor-pointer transition-colors duration-200"
            style={{ color: "hsl(220,12%,46%)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "hsl(224,24%,14%)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "hsl(220,12%,46%)"; }}
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
                background: "var(--gradient-primary)",
                color: "#fff",
                boxShadow: `0 3px 12px -3px hsla(${h},65%,50%,0.38)`,
              }}
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
          ) : (
            <span className="ml-auto text-xs italic" style={{ color: "hsl(220,12%,62%)" }}>
              Private / WIP
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── Quick action ───────────────────────────────────────────────── */
interface QuickActionProps { href: string; label: string; hue: number; children: React.ReactNode; }

const QuickAction = ({ href, label, hue, children }: QuickActionProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2 rounded-lg cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    style={{
      background: "hsla(0,0%,100%,0.88)",
      backdropFilter: "blur(8px)",
      border: `1px solid hsla(${hue},65%,50%,0.22)`,
      color: `hsl(${hue},65%,36%)`,
      boxShadow: "0 2px 8px hsla(220,20%,20%,0.10)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = `hsla(${hue},65%,50%,0.10)`;
      e.currentTarget.style.transform = "scale(1.08)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "hsla(0,0%,100%,0.88)";
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    {children}
  </a>
);

/* ─── Section header ─────────────────────────────────────────────── */
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
      <p
        className="text-sm font-semibold tracking-[0.18em] uppercase mb-3"
        style={{ color: "hsl(250,70%,48%)" }}
      >
        What I've built
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
        Featured{" "}
        <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
      </h2>
      <p className="max-w-md mx-auto text-base leading-relaxed" style={{ color: "hsl(220,12%,42%)" }}>
        A selection of projects that showcase my approach to full-stack development.
      </p>
      <div className="flex items-center justify-center gap-3 mt-6" aria-hidden="true">
        <div className="h-px w-16 rounded-full" style={{ background: "linear-gradient(to right, transparent, hsla(250,70%,50%,0.4))" }} />
        <div className="h-1.5 w-1.5 rounded-full" style={{ background: "hsl(250,70%,50%)" }} />
        <div className="h-px w-16 rounded-full" style={{ background: "linear-gradient(to left, transparent, hsla(250,70%,50%,0.4))" }} />
      </div>
    </div>
  );
};

/* ─── Main ───────────────────────────────────────────────────────── */
const Projects = () => (
  <section id="projects" className="py-24 px-6 relative overflow-hidden" style={{ background: "hsl(220,20%,97%)" }}>
    {/* Subtle top accent */}
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] pointer-events-none"
      style={{
        background: "radial-gradient(ellipse, hsla(250,70%,55%,0.06) 0%, transparent 70%)",
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
      <MoreProjectsCTA />
    </div>
  </section>
);

/* ─── More CTA ───────────────────────────────────────────────────── */
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
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm cursor-pointer border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        style={{
          background: "hsla(250,70%,50%,0.05)",
          borderColor: "hsla(250,70%,50%,0.25)",
          color: "hsl(250,70%,42%)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "hsla(250,70%,50%,0.10)";
          e.currentTarget.style.borderColor = "hsla(250,70%,50%,0.48)";
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 8px 24px -6px hsla(250,70%,50%,0.22)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "hsla(250,70%,50%,0.05)";
          e.currentTarget.style.borderColor = "hsla(250,70%,50%,0.25)";
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
