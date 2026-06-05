import { useScrollReveal } from "@/hooks/useScrollReveal";

const traits = [
  "Logical Thinking",
  "Team Player",
  "Continuous Learner",
  "Problem Solver",
];

const quickFacts = [
  { label: "Experience", value: "Academic & Personal Projects" },
  { label: "Specialty", value: "Java / Spring Boot" },
  { label: "Projects", value: "5+ Completed" },
  { label: "Location", value: "Da Nang, Vietnam" },
  { label: "Status", value: "Available", highlight: true },
];

const About = () => {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="about" className="py-24 px-6" style={{ background: "hsl(0,0%,100%)" }}>
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
          <p className="text-sm font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "hsl(250,70%,48%)" }}>
            Who I am
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div
            className="w-16 h-1 rounded-full mx-auto"
            style={{ background: "var(--gradient-primary)" }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — bio */}
          <div
            ref={leftRef}
            className="space-y-5"
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s",
            }}
          >
            <p className="text-base leading-relaxed" style={{ color: "hsl(220,12%,36%)" }}>
              I'm an Intern/Fresher Fullstack Developer focused on building end-to-end web
              applications. Specializing in Java/Spring Boot on the backend and React on the
              frontend, I always strive to write clean, efficient, and maintainable code.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "hsl(220,12%,36%)" }}>
              When I'm not coding, you can find me exploring new design patterns,
              researching microservices architecture, or sharing knowledge with the developer community.
            </p>

            {/* Trait chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-default"
                  style={{
                    background: "hsla(250,70%,50%,0.06)",
                    borderColor: "hsla(250,70%,50%,0.22)",
                    color: "hsl(250,70%,40%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "hsla(250,70%,50%,0.12)";
                    (e.currentTarget as HTMLElement).style.borderColor = "hsla(250,70%,50%,0.42)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "hsla(250,70%,50%,0.06)";
                    (e.currentTarget as HTMLElement).style.borderColor = "hsla(250,70%,50%,0.22)";
                  }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Right — quick facts card */}
          <div
            ref={rightRef}
            className="rounded-2xl overflow-hidden"
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s",
              background: "hsl(220,20%,97%)",
              border: "1px solid hsl(220,18%,88%)",
              boxShadow: "0 4px 20px -6px hsla(220,20%,20%,0.08)",
            }}
          >
            {/* Card header */}
            <div
              className="px-6 py-4"
              style={{
                background: "var(--gradient-primary)",
              }}
            >
              <h3 className="text-base font-semibold text-white">Quick Facts</h3>
            </div>

            {/* Rows */}
            <div className="divide-y" style={{ borderColor: "hsl(220,18%,90%)" }}>
              {quickFacts.map(({ label, value, highlight }) => (
                <div
                  key={label}
                  className="flex items-center justify-between px-6 py-3.5"
                >
                  <span className="text-sm" style={{ color: "hsl(220,12%,48%)" }}>
                    {label}
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color: highlight
                        ? "hsl(142,60%,34%)"
                        : "hsl(224,24%,14%)",
                    }}
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
