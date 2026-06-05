import { Code, Server, Database, Wifi, Brain, Languages } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    icon: Server,
    title: "Backend (Java)",
    subtitle: "Java / Spring Ecosystem",
    skills: [
      "Spring Boot", "Spring MVC", "Spring Security",
      "RESTful API Development", "JWT Authentication", "JPA / Hibernate",
    ],
    hue: 250,
    featured: true,
  },
  {
    icon: Code,
    title: "Frontend",
    skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "DaisyUI", "Zustand", "Axios"],
    hue: 220,
  },
  {
    icon: Server,
    title: "Backend (Node.js)",
    skills: ["Node.js", "Express.js"],
    hue: 142,
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MongoDB + Mongoose", "PostgreSQL", "MySQL", "pgvector"],
    hue: 200,
  },
  {
    icon: Wifi,
    title: "Realtime & Services",
    skills: ["Socket.IO", "Cloudinary (image storage)", "Redis"],
    hue: 30,
  },
  {
    icon: Brain,
    title: "AI & NLP",
    skills: ["NLP", "Vector Search", "Recommendation Systems", "PhoBERT", "vi-SBERT", "NeuMF", "FAISS"],
    hue: 290,
  },
  {
    icon: Languages,
    title: "Languages",
    skills: ["English – B1 (CEFR)"],
    note: "Able to communicate in routine work situations and understand basic technical documents.",
    hue: 190,
  },
];

/* ─── Featured card ──────────────────────────────────────────────── */
const FeaturedCard = ({ cat }: { cat: (typeof skillCategories)[number] }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const IconComponent = cat.icon;
  const h = cat.hue!;

  return (
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden mb-10"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        background: "#ffffff",
        border: `2px solid hsla(${h},70%,50%,0.3)`,
        boxShadow: `0 8px 32px -8px hsla(${h},70%,50%,0.14), 0 2px 8px hsla(220,20%,20%,0.06)`,
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden="true"
      />

      <div className="p-8">
        {/* Core badge */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--gradient-primary)", boxShadow: `0 4px 14px -4px hsla(${h},70%,50%,0.4)` }}
            >
              <IconComponent className="h-7 w-7 text-white" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">{cat.title}</h3>
              <p className="text-sm" style={{ color: "hsl(220,12%,50%)" }}>{cat.subtitle}</p>
            </div>
          </div>

          <span
            className="px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0"
            style={{
              background: `hsla(${h},70%,50%,0.08)`,
              border: `1px solid hsla(${h},70%,50%,0.25)`,
              color: `hsl(${h},70%,38%)`,
            }}
          >
            ★ Core Expertise
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {cat.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-default"
              style={{
                background: `hsla(${h},70%,50%,0.07)`,
                borderColor: `hsla(${h},70%,50%,0.25)`,
                color: `hsl(${h},70%,36%)`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = `hsla(${h},70%,50%,0.14)`;
                (e.currentTarget as HTMLElement).style.borderColor = `hsla(${h},70%,50%,0.45)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = `hsla(${h},70%,50%,0.07)`;
                (e.currentTarget as HTMLElement).style.borderColor = `hsla(${h},70%,50%,0.25)`;
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Regular card ───────────────────────────────────────────────── */
const SkillCard = ({ cat, index }: { cat: (typeof skillCategories)[number]; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const IconComponent = cat.icon;
  const h = cat.hue!;

  return (
    <div
      ref={ref}
      className="rounded-2xl p-6 transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease-out ${index * 0.08}s, transform 0.6s ease-out ${index * 0.08}s, box-shadow 0.25s ease, border-color 0.25s ease`,
        background: "#ffffff",
        border: "1px solid hsl(220,18%,90%)",
        boxShadow: "0 2px 12px -4px hsla(220,20%,20%,0.07)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `hsla(${h},65%,50%,0.35)`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 28px -8px hsla(${h},65%,50%,0.18)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "hsl(220,18%,90%)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px -4px hsla(220,20%,20%,0.07)";
      }}
    >
      <div className="mb-4">
        <div
          className="w-11 h-11 rounded-lg flex items-center justify-center mb-3"
          style={{ background: `hsla(${h},65%,50%,0.10)`, color: `hsl(${h},65%,38%)` }}
        >
          <IconComponent className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="text-base font-bold text-foreground">{cat.title}</h3>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {cat.skills.map((skill) => (
          <span
            key={skill}
            className="text-sm px-2.5 py-1 rounded-full border"
            style={{
              background: `hsla(${h},55%,50%,0.06)`,
              borderColor: `hsla(${h},55%,50%,0.18)`,
              color: `hsl(${h},55%,36%)`,
            }}
          >
            {skill}
          </span>
        ))}

        {cat.note && (
          <p className="text-xs leading-relaxed w-full mt-2" style={{ color: "hsl(220,12%,50%)" }}>
            {cat.note}
          </p>
        )}
      </div>
    </div>
  );
};

/* ─── Section header ─────────────────────────────────────────────── */
const SectionHeader = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

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
      <p className="text-sm font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "hsl(250,70%,48%)" }}>
        What I work with
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
        My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
      </h2>
      <div className="w-16 h-1 rounded-full mx-auto" style={{ background: "var(--gradient-primary)" }} />
    </div>
  );
};

/* ─── Main ───────────────────────────────────────────────────────── */
const Skills = () => (
  <section id="skills" className="py-24 px-6" style={{ background: "hsl(220,20%,97%)" }}>
    <div className="max-w-6xl mx-auto">
      <SectionHeader />

      {/* Featured: Java Backend */}
      {skillCategories.filter((c) => c.featured).map((cat) => (
        <FeaturedCard key={cat.title} cat={cat} />
      ))}

      {/* Other skills */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories
          .filter((c) => !c.featured)
          .map((cat, index) => (
            <SkillCard key={cat.title} cat={cat} index={index} />
          ))}
      </div>
    </div>
  </section>
);

export default Skills;
