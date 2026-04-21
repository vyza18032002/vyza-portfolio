import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/50" : ""}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Shiva Reddy Logo" className="h-10 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3 py-2 text-sm rounded-lg transition-all duration-300 ${
                activeSection === l.href.slice(1)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
              }`}
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="ml-3" asChild>
            <a href="https://docs.google.com/document/d/11_9UII4rn396nlSORc9rU6TNAXm4M8Bw/edit" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted/30 transition-colors">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 border-b border-border/50" : "max-h-0"}`}>
        <div className="bg-background/95 backdrop-blur-xl px-6 pb-4 space-y-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2.5 px-3 text-sm rounded-lg transition-all ${
                activeSection === l.href.slice(1)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
