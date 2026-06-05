import { Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import CalendlyWidget from "./CalendlyWidget";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const { ref: headRef, isVisible: headVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const { ref: socialRef, isVisible: socialVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.4 });

  return (
    <>
      <section id="contact" className="py-24 px-6" style={{ background: "var(--surface-page)" }}>
        <div className="max-w-4xl mx-auto text-center">

          {/* Header */}
          <div
            ref={headRef}
            className="mb-16"
            style={{
              opacity: headVisible ? 1 : 0,
              transform: headVisible ? "translateY(0)" : "translateY(22px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            }}
          >
            <p className="text-sm font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "var(--text-overline)" }}>
              Get in touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-16 h-1 rounded-full mx-auto mb-6" style={{ background: "var(--gradient-primary)" }} />
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-body)" }}>
              I'm always open to new opportunities and exciting projects.
              Let's discuss how we can work together to create something amazing.
            </p>
          </div>

          {/* Cards */}
          <div
            ref={cardsRef}
            className="grid md:grid-cols-2 gap-6 mb-12"
            style={{
              opacity: cardsVisible ? 1 : 0,
              transform: cardsVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s",
            }}
          >
            {/* Email */}
            <div
              className="rounded-2xl p-8 text-left transition-all duration-300"
              style={{ background: "var(--surface-card)", border: "1px solid var(--border-card)", boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-card-hover)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-card)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "var(--badge-bg)", color: "var(--badge-text)" }}
              >
                <Mail className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Email Me</h3>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "var(--text-body)" }}>
                Drop me a line and I'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:tranchitho160704@gmail.com"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-xl text-sm font-semibold cursor-pointer border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{
                  background: "var(--badge-bg)",
                  borderColor: "var(--badge-border)",
                  color: "var(--badge-text)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--btn-ghost-bg-hover)";
                  e.currentTarget.style.borderColor = "var(--btn-ghost-border-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--badge-bg)";
                  e.currentTarget.style.borderColor = "var(--badge-border)";
                }}
              >
                tranchitho160704@gmail.com
              </a>
            </div>

            {/* Schedule */}
            <div
              className="rounded-2xl p-8 text-left transition-all duration-300"
              style={{ background: "var(--surface-card)", border: "1px solid var(--border-card)", boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-card-hover)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-card)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "var(--badge-bg)", color: "var(--badge-text)" }}
              >
                <MessageSquare className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Let's Chat</h3>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "var(--text-body)" }}>
                Schedule a call to discuss your project requirements.
              </p>
              <button
                className="w-full px-4 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-white"
                style={{ background: "var(--gradient-primary)", boxShadow: "0 4px 14px -4px hsla(250,70%,50%,0.40)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 8px 22px -4px hsla(250,70%,50%,0.50)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 14px -4px hsla(250,70%,50%,0.40)";
                }}
                onClick={() => setShowCalendly(true)}
              >
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Social */}
          <div
            ref={socialRef}
            className="flex justify-center gap-4"
            style={{
              opacity: socialVisible ? 1 : 0,
              transform: socialVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
            }}
          >
            {[
              {
                href: "https://github.com/trchitho",
                label: "GitHub",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ),
              },
              {
                href: "mailto:tranchitho160704@gmail.com",
                label: "Email",
                icon: <Mail className="h-5 w-5" aria-hidden="true" />,
              },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="p-3.5 rounded-full cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{
                  background: "var(--btn-ghost-bg)",
                  border: "1px solid var(--btn-ghost-border)",
                  color: "var(--btn-ghost-text)",
                  boxShadow: "var(--card-shadow)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "var(--btn-ghost-bg-hover)";
                  el.style.borderColor = "var(--btn-ghost-border-hover)";
                  el.style.color = "var(--btn-ghost-text-hover)";
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 8px 20px -4px hsla(250,70%,55%,0.22)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "var(--btn-ghost-bg)";
                  el.style.borderColor = "var(--btn-ghost-border)";
                  el.style.color = "var(--btn-ghost-text)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "var(--card-shadow)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="text-sm mt-10" style={{ color: "var(--text-subtle)" }}>
            © {new Date().getFullYear()} Tran Chi Tho — Built with React & Tailwind CSS
          </p>
        </div>
      </section>

      {showCalendly && (
        <CalendlyWidget url="https://calendly.com/tranchitho160704" onClose={() => setShowCalendly(false)} />
      )}
    </>
  );
};

export default Contact;
