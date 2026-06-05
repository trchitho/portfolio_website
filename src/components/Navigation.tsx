import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        isScrolled
          ? {
              background: "var(--nav-scrolled-bg)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid var(--nav-scrolled-border)",
              boxShadow: "var(--nav-scrolled-shadow)",
            }
          : { background: "transparent" }
      }
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            Tran Chi Tho
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                style={{ color: "var(--nav-link-color)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--nav-link-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--nav-link-color)";
                }}
              >
                {item.label}
              </button>
            ))}

            {/* Theme toggle */}
            <ThemeToggle theme={theme} onToggle={toggleTheme} />

            {/* Resume CTA */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-white"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "0 3px 12px -3px hsla(250,70%,50%,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 18px -3px hsla(250,70%,50%,0.50)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 3px 12px -3px hsla(250,70%,50%,0.35)";
              }}
            >
              Resume
            </a>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{ color: "var(--nav-link-color)" }}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden mt-3 py-4 rounded-2xl"
            style={{
              background: "var(--nav-mobile-bg)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid var(--nav-mobile-border)",
              boxShadow: "var(--nav-mobile-shadow)",
            }}
          >
            <div className="flex flex-col gap-1 px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{ color: "var(--nav-link-color)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "var(--gradient-primary)";
                    el.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "transparent";
                    el.style.color = "var(--nav-link-color)";
                  }}
                >
                  {item.label}
                </button>
              ))}
              <div
                className="pt-2 mt-1"
                style={{ borderTop: "1px solid var(--border-divider)" }}
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 text-white"
                  style={{
                    background: "var(--gradient-primary)",
                    boxShadow: "0 3px 12px -3px hsla(250,70%,50%,0.35)",
                  }}
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

/* ─── Theme Toggle Button ────────────────────────────────────────── */
interface ThemeToggleProps {
  theme: "light" | "dark";
  onToggle: () => void;
}

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  const isDark = theme === "dark";

  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full transition-all duration-200"
      style={{
        width: 44,
        height: 24,
        padding: 3,
        background: isDark
          ? "linear-gradient(135deg, hsl(250,84%,55%), hsl(270,90%,65%))"
          : "hsl(220,18%,86%)",
        boxShadow: isDark
          ? "0 0 12px hsla(250,84%,65%,0.35)"
          : "inset 0 1px 3px hsla(220,20%,20%,0.12)",
      }}
    >
      {/* Track icons */}
      <span
        className="absolute left-[5px] flex items-center justify-center transition-opacity duration-200"
        style={{ opacity: isDark ? 0 : 1 }}
        aria-hidden="true"
      >
        <Sun
          className="h-3 w-3"
          style={{ color: "hsl(40,90%,50%)" }}
          strokeWidth={2.5}
        />
      </span>
      <span
        className="absolute right-[5px] flex items-center justify-center transition-opacity duration-200"
        style={{ opacity: isDark ? 1 : 0 }}
        aria-hidden="true"
      >
        <Moon
          className="h-3 w-3"
          style={{ color: "hsl(220,60%,90%)" }}
          strokeWidth={2.5}
        />
      </span>

      {/* Thumb */}
      <span
        className="relative z-10 flex items-center justify-center rounded-full transition-all duration-300"
        style={{
          width: 18,
          height: 18,
          background: "#fff",
          transform: isDark ? "translateX(20px)" : "translateX(0)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
        }}
        aria-hidden="true"
      >
        {isDark ? (
          <Moon className="h-2.5 w-2.5" style={{ color: "hsl(250,70%,50%)" }} strokeWidth={2.5} />
        ) : (
          <Sun className="h-2.5 w-2.5" style={{ color: "hsl(40,90%,50%)" }} strokeWidth={2.5} />
        )}
      </span>
    </button>
  );
};

export default Navigation;
