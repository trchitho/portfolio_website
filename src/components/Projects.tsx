import { useState } from "react";
import { ExternalLink, Github, BookOpen } from "lucide-react";
import fullstackChatImg from "@/assets/images/fullstack-chatapp.png";
import aiCareerImg from "@/assets/images/ai-career-system.png";
import portfolioImg from "@/assets/images/portfolio.png";
import foodhubImg from "@/assets/images/foodhub.png";
import newsCrawlerImg from "@/assets/images/news_crawler.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ─── Data ──────────────────────────────────────────────────────── */
type ProjectType = "personal" | "team";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string | null;
  readme: string;
  accentHue: number;
  badge: string;
  type: ProjectType;
}

const PROJECTS: Project[] = [
  {
    title: "FoodHub",
    subtitle: "Online Food Delivery Marketplace",
    description:
      "A full-stack food delivery platform built with Spring Boot and React. Features JWT authentication, role-based access control, restaurant & menu management, order tracking, and Redis caching for performance.",
    tech: ["Java 21", "Spring Boot", "Spring Security", "MySQL", "Redis", "React", "Tailwind CSS"],
    image: foodhubImg,
    github: "https://github.com/trchitho/Food-Delivery-Project",
    live: "https://food-delivery-project-chi-six.vercel.app/",
    readme: "https://trchitho.github.io/Food-Delivery-Project/",
    accentHue: 250,
    badge: "Full Stack",
    type: "personal",
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
    readme: "https://trchitho.github.io/FullStack-Chat-App/",
    accentHue: 262,
    badge: "Real-time",
    type: "personal",
  },
  {
    title: "AI Career",
    subtitle: "AI-Based Career Recommendation System",
    description:
      "A personalized career recommendation system powered by AI, built on a monorepo architecture. Integrates PostgreSQL with pgvector for vector similarity search and semantic job matching.",
    tech: ["React 18", "Vite", "FastAPI", "PostgreSQL", "pgvector", "JWT", "SQLAlchemy"],
    image: aiCareerImg,
    github: "https://github.com/trchitho/AI-Based-Career-Recommendation-System",
    live: "https://ai-based-career-recommendation-system.pages.dev/",
    readme: "https://trchitho.github.io/AI-Based-Career-Recommendation-System/",
    accentHue: 220,
    badge: "AI / ML",
    type: "team",
  },
  {
    title: "VN News",
    subtitle: "Django All-in-One News Aggregator",
    description:
      "A Vietnamese news aggregator built with Django, Celery, and Redis. Crawls RSS feeds from multiple Vietnamese news sources, extracts clean article content, and serves a fast web interface with categories, search, comments, and emoji reactions.",
    tech: ["Django", "Celery", "Redis", "PostgreSQL", "Feedparser", "Trafilatura", "Gunicorn"],
    image: newsCrawlerImg,
    github: "https://github.com/trchitho/news_crawler",
    live: null,
    readme: "https://trchitho.github.io/news_crawler/",
    accentHue: 155,
    badge: "Backend",
    type: "personal",
  },
  {
    title: "Portfolio",
    subtitle: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website with smooth animations, Motion-Driven design system, dark/light theme toggle, and modern UI using React, TypeScript, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Three.js"],
    image: portfolioImg,
    github: "https://github.com/trchitho/portfolio_website",
    live: "https://trchitho.github.io/portfolio_website/",
    readme: "https://trchitho.github.io/portfolio_website/",
    accentHue: 240,
    badge: "Portfolio",
    type: "personal",
  },
];

/* ─── Type label ─────────────────────────────────────────────────── */
const TypeBadge = ({ type }: { type: ProjectType }) => (
  <span
    className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide"
    style={
      type === "team"
        ? {
            background: "hsla(38,95%,55%,0.15)",
            border: "1px solid hsla(38,95%,55%,0.38)",
            color: "hsl(38,80%,var(--badge-chip-l, 38%))",
          }
        : {
            background: "hsla(142,60%,45%,0.12)",
            border: "1px solid hsla(142,60%,45%,0.32)",
            color: "hsl(142,55%,var(--badge-chip-l, 30%))",
          }
    }
  >
    {type === "team" ? "Team Project" : "Personal Project"}
  </span>
);

/* ─── Card ───────────────────────────────────────────────────────── */
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
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
        transition: `opacity 0.6s ease-out ${index * 0.10}s, transform 0.6s ease-out ${index * 0.10}s, box-shadow 0.3s ease, border-color 0.3s ease`,
        background: "var(--surface-card)",
        border: `1px solid ${hovered ? `hsla(${h},65%,55%,0.40)` : "var(--border-card)"}`,
        boxShadow: hovered ? "var(--card-shadow-hover)" : "var(--card-shadow)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Category badge — top left */}
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

      {/* Team / Personal badge — top right (always visible) */}
      <TypeBadge type={project.type} />

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

        {/* Hover: README quick-action (single icon) */}
        <div
          className="absolute bottom-3 left-3 flex gap-2 transition-all duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
          }}
        >
          <a
            href={project.readme}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View README – ${project.title}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{
              background: "var(--btn-ghost-bg)",
              backdropFilter: "blur(8px)",
              border: `1px solid hsla(${h},65%,55%,0.30)`,
              color: `hsl(${h},65%,var(--badge-chip-l, 55%))`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `hsla(${h},65%,55%,0.20)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--btn-ghost-bg)";
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            README
          </a>
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
        <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
          {project.subtitle}
        </p>
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
        <div
          className="flex items-center gap-3 pt-3"
          style={{ borderTop: "1px solid var(--border-divider)" }}
        >
          {/* Source link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code – ${project.title}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium cursor-pointer transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--foreground)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            Source
          </a>

          {/* Live Demo or WIP */}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo – ${project.title}`}
              className="ml-auto inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-white"
              style={{
                background: "var(--gradient-primary)",
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
            <span
              className="ml-auto text-xs italic"
              style={{ color: "var(--text-subtle)" }}
            >
              Private / WIP
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── Section Header ─────────────────────────────────────────────── */
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
        style={{ color: "var(--text-overline)" }}
      >
        What I've built
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
        Featured{" "}
        <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
      </h2>
      <p
        className="max-w-md mx-auto text-base leading-relaxed"
        style={{ color: "var(--text-body)" }}
      >
        A selection of projects that showcase my approach to full-stack development.
      </p>
      <div className="flex items-center justify-center gap-3 mt-6" aria-hidden="true">
        <div
          className="h-px w-16 rounded-full"
          style={{ background: "linear-gradient(to right, transparent, hsl(var(--primary)/0.4))" }}
        />
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
        <div
          className="h-px w-16 rounded-full"
          style={{ background: "linear-gradient(to left, transparent, hsl(var(--primary)/0.4))" }}
        />
      </div>
    </div>
  );
};

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
      </a>
    </div>
  );
};

/* ─── Main Section ───────────────────────────────────────────────── */
const Projects = () => (
  <section
    id="projects"
    className="py-24 px-6 relative overflow-hidden"
    style={{ background: "var(--surface-page-alt)" }}
  >
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] pointer-events-none"
      style={{
        background: "radial-gradient(ellipse, hsla(250,70%,55%,0.05) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
      aria-hidden="true"
    />
    <div className="max-w-6xl mx-auto relative z-10">
      <SectionHeader />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
      <MoreProjectsCTA />
    </div>
  </section>
);

export default Projects;
