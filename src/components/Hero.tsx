import { useEffect, useState } from "react";
import { Mail, ArrowDown } from "lucide-react";
import TypewriterText from "@/components/ui/typewriter-text";
import heroBackground from "@/assets/hero-bg.jpg";
import HeroTechSphere from "./HeroTechSphere";

/* ─── Particles ─────────────────────────────────────────────────── */
interface Particle {
  id: number; x: number; y: number;
  size: number; delay: number; duration: number; opacity: number;
}
const PARTICLES: Particle[] = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1.5,
  delay: Math.random() * 4,
  duration: Math.random() * 4 + 4,
  opacity: Math.random() * 0.18 + 0.06,
}));

/* ─── Hero ───────────────────────────────────────────────────────── */
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stagger = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.75s ease-out ${delay}s, transform 0.75s ease-out ${delay}s`,
  });

  const socialLinks = [
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
    {
      href: "https://www.facebook.com/chitho.tran.777",
      label: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--surface-page)" }}
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.04] bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsla(250,60%,50%,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-primary"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 left-[10%] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsla(250,70%,60%,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsla(262,80%,56%,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-20 lg:py-12">
        <div className="grid min-w-0 lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:min-h-[80vh]">

          {/* Left */}
          <div className="min-w-0 text-center lg:text-left order-2 lg:order-1">

            {/* Status badge */}
            <div className="mb-5 inline-flex max-w-full" style={stagger(0.05)}>
              <span
                className="inline-flex min-w-0 items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border select-none"
                style={{
                  background: "var(--badge-bg)",
                  borderColor: "var(--badge-border)",
                  color: "var(--badge-text)",
                }}
              >
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="min-w-0 break-words">Intern / Fresher Fullstack Developer</span>
              </span>
            </div>

            {/* Name */}
            <h1
              className="font-bold leading-[1.08] tracking-tight mb-5 break-words"
              style={{ fontSize: "clamp(2.55rem, 13vw, 5.5rem)", ...stagger(0.15) }}
            >
              <span className="bg-gradient-primary bg-clip-text text-transparent">Tran</span>{" "}
              <span className="text-foreground">Chi Tho</span>
            </h1>

            {/* Role + bar */}
            <div className="mb-6 flex min-w-0 items-center gap-3 justify-center lg:justify-start" style={stagger(0.25)}>
              <span
                className="h-[2px] w-8 rounded-full flex-shrink-0"
                style={{ background: "var(--gradient-primary)" }}
                aria-hidden="true"
              />
              <p className="min-w-0 text-base sm:text-lg md:text-xl font-semibold tracking-wide leading-snug" style={{ color: "var(--text-role)" }}>
                Building full-stack products that ship
              </p>
            </div>

            {/* Typewriter */}
            <div
              className="text-base md:text-lg mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed break-words"
              style={{
                color: "var(--text-body)",
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.8s ease-out 0.35s",
              }}
            >
              <TypewriterText
                text="I build high-performance web applications with modern technologies. Specializing in Java, Spring Boot, React, and delivering fullstack solutions from backend to frontend."
                speed={26}
              />
            </div>

            {/* CTAs */}
            <div className="flex flex-col min-[420px]:flex-row flex-wrap justify-center lg:justify-start gap-3 mb-8 sm:mb-10" style={stagger(0.45)}>
              <HeroButton
                href="#projects"
                variant="primary"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </HeroButton>
              <HeroButton href="mailto:tranchitho160704@gmail.com" variant="ghost">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Hire Me
              </HeroButton>
            </div>

            {/* Social */}
            <div
              className="flex justify-center lg:justify-start gap-3"
              style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.8s ease-out 0.58s" }}
            >
              {socialLinks.map(({ href, icon, label }) => (
                <SocialLink key={label} href={href} label={label}>{icon}</SocialLink>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:flex sm:justify-center lg:justify-start sm:gap-8" style={stagger(0.7)}>
              {[
                { value: "4+", label: "Projects Built" },
                { value: "3+", label: "Tech Stacks" },
                { value: "1+", label: "Year Learning" },
              ].map(({ value, label }) => (
                <div key={label} className="min-w-0 text-center lg:text-left">
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">{value}</div>
                  <div className="text-[11px] sm:text-xs leading-tight mt-0.5" style={{ color: "var(--text-muted)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Tech Sphere */}
          <div
            className="min-w-0 flex justify-center items-center order-1 lg:order-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.88)",
              transition: "opacity 0.9s ease-out 0.25s, transform 0.9s ease-out 0.25s",
            }}
          >
            <div className="relative w-full max-w-[500px] mx-auto">
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, hsla(250,70%,55%,0.16) 0%, transparent 65%)",
                  transform: "scale(1.35)",
                  filter: "blur(28px)",
                }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, hsla(262,80%,56%,0.08) 0%, transparent 60%)",
                  transform: "scale(1.6)",
                  filter: "blur(44px)",
                }}
                aria-hidden="true"
              />
              <div className="w-full max-w-full relative z-10">
                <HeroTechSphere />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer group"
        style={{
          opacity: isVisible && !scrolled ? 1 : 0,
          transition: "opacity 1s ease-out 1.1s",
          pointerEvents: scrolled ? "none" : "auto",
          background: "none",
          border: "none",
        }}
        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to projects"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--text-subtle)" }}>
          Scroll
        </span>
        <div
          className="w-[22px] h-9 rounded-full flex justify-center pt-1.5 transition-colors duration-200"
          style={{ border: "1px solid var(--border-card)" }}
        >
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" style={{ animationDuration: "1.4s" }} aria-hidden="true" />
        </div>
      </button>
    </section>
  );
};

/* ─── Sub-components ─────────────────────────────────────────────── */
interface HeroButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: "primary" | "ghost";
  children: React.ReactNode;
}

const HeroButton = ({ variant, children, ...props }: HeroButtonProps) => {
  const base =
    "inline-flex min-w-0 items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary select-none";

  if (variant === "primary") {
    return (
      <a
        {...props}
        className={base}
        style={{ background: "var(--gradient-primary)", color: "#fff", boxShadow: "0 4px 18px hsla(250,70%,50%,0.32)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 8px 28px hsla(250,70%,50%,0.46)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 18px hsla(250,70%,50%,0.32)";
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      {...props}
      className={base}
      style={{
        background: "var(--badge-bg)",
        border: "1px solid var(--badge-border)",
        color: "var(--badge-text)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--btn-ghost-bg-hover)";
        e.currentTarget.style.borderColor = "var(--btn-ghost-border-hover)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--badge-bg)";
        e.currentTarget.style.borderColor = "var(--badge-border)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {children}
    </a>
  );
};

interface SocialLinkProps { href: string; label: string; children: React.ReactNode; }

const SocialLink = ({ href, label, children }: SocialLinkProps) => (
  <a
    href={href}
    aria-label={label}
    target={href.startsWith("mailto") ? undefined : "_blank"}
    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
    className="p-2.5 rounded-xl cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    style={{
      background: "var(--btn-ghost-bg)",
      border: "1px solid var(--btn-ghost-border)",
      backdropFilter: "blur(8px)",
      color: "var(--btn-ghost-text)",
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget;
      el.style.borderColor = "var(--btn-ghost-border-hover)";
      el.style.background = "var(--btn-ghost-bg-hover)";
      el.style.transform = "translateY(-3px)";
      el.style.boxShadow = "0 6px 16px hsla(250,70%,50%,0.18)";
      el.style.color = "var(--btn-ghost-text-hover)";
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget;
      el.style.borderColor = "var(--btn-ghost-border)";
      el.style.background = "var(--btn-ghost-bg)";
      el.style.transform = "translateY(0)";
      el.style.boxShadow = "none";
      el.style.color = "var(--btn-ghost-text)";
    }}
  >
    {children}
  </a>
);

export default Hero;
