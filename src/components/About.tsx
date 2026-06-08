import { useScrollReveal } from "@/hooks/useScrollReveal";

const traits = ["Logical Thinking", "Team Player", "Continuous Learner", "Problem Solver"];

const quickFacts = [
  { label: "Experience", value: "Academic & Personal Projects" },
  { label: "Specialty",  value: "Java / Spring Boot" },
  { label: "Projects",   value: "6+ Completed" },
  { label: "Education",  value: "DUT – Da Nang University" },
  { label: "Location",   value: "Da Nang, Vietnam" },
  { label: "Status",     value: "Available", highlight: true },
];

const About = () => {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 overflow-hidden" style={{ background: "var(--surface-page-alt)" }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div
          ref={headRef}
          className="text-center mb-16"
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(22px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          <p className="text-sm font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "var(--text-overline)" }}>
            Who I am
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: "var(--gradient-primary)" }} />
        </div>

        <div className="grid min-w-0 md:grid-cols-2 gap-10 md:gap-12 items-start">

          {/* Left — bio */}
          <div
            ref={leftRef}
            className="space-y-5 min-w-0"
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s",
            }}
          >
            <p className="text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
              I'm an Intern/Fresher Fullstack Developer focused on building end-to-end web
              applications. Specializing in Java/Spring Boot on the backend and React on the
              frontend, I always strive to write clean, efficient, and maintainable code.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
              When I'm not coding, you can find me exploring new design patterns,
              researching microservices architecture, or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-default"
                  style={{
                    background: "var(--badge-bg)",
                    borderColor: "var(--badge-border)",
                    color: "var(--badge-text)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--btn-ghost-bg-hover)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--btn-ghost-border-hover)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--badge-bg)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--badge-border)";
                  }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Right — quick facts */}
          <div
            ref={rightRef}
            className="rounded-2xl overflow-hidden min-w-0"
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s",
              background: "var(--surface-card)",
              border: "1px solid var(--border-card)",
              boxShadow: "var(--card-shadow)",
            }}
          >
            <div className="px-6 py-4" style={{ background: "var(--gradient-primary)" }}>
              <h3 className="text-base font-semibold text-white">Quick Facts</h3>
            </div>

            <div className="divide-y" style={{ borderColor: "var(--border-divider)" }}>
              {quickFacts.map(({ label, value, highlight }) => (
                <div key={label} className="flex flex-col min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between gap-1.5 px-5 sm:px-6 py-3.5">
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{label}</span>
                  <span
                    className="text-sm font-semibold break-words min-[420px]:text-right"
                    style={{ color: highlight ? "hsl(142,60%,40%)" : "var(--foreground)" }}
                  >
                    {highlight && (
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1.5 align-middle" aria-hidden="true" />
                    )}
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
