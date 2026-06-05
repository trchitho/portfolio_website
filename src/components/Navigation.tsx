import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              background: "hsla(0,0%,100%,0.88)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid hsl(220,18%,88%)",
              boxShadow: "0 2px 16px -4px hsla(220,20%,20%,0.08)",
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
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                style={{ color: "hsl(220,12%,36%)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(250,70%,42%)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(220,12%,36%)"; }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{
                background: "var(--gradient-primary)",
                color: "#fff",
                boxShadow: "0 3px 12px -3px hsla(250,70%,50%,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 18px -3px hsla(250,70%,50%,0.48)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 3px 12px -3px hsla(250,70%,50%,0.35)";
              }}
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{ color: "hsl(220,12%,36%)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "hsl(220,18%,92%)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden mt-3 py-4 rounded-2xl"
            style={{
              background: "hsla(0,0%,100%,0.95)",
              backdropFilter: "blur(12px)",
              border: "1px solid hsl(220,18%,88%)",
              boxShadow: "0 8px 32px -8px hsla(220,20%,20%,0.12)",
            }}
          >
            <div className="flex flex-col gap-1 px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{ color: "hsl(220,12%,30%)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "hsl(250,70%,50%)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "hsl(220,12%,30%)";
                  }}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 mt-1" style={{ borderTop: "1px solid hsl(220,18%,90%)" }}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200"
                  style={{
                    background: "var(--gradient-primary)",
                    color: "#fff",
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

export default Navigation;
