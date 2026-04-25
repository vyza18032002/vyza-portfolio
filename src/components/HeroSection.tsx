import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
import SpiderWeb from "./SpiderWeb";

const roles = ["Machine Learning Engineer", "NLP Specialist", "Python Developer", "Data Scientist"];

const HeroSection = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIdx((roleIdx + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden spider-web-pattern">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <SpiderWeb />
        {/* Spider-themed background elements */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/10 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/5 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }} />

        {/* Spider web pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" className="absolute inset-0">
            {/* Large concentric circles */}
            <circle cx="500" cy="500" r="400" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="500" cy="500" r="300" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="500" cy="500" r="200" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="500" cy="500" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-slide-in-left" style={{ animationDelay: "0.1s", opacity: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs text-primary tracking-wider">Available for opportunities</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 animate-slide-in-left" style={{ animationDelay: "0.2s", opacity: 0 }}>
              <span className="text-foreground">Vyza Shiva</span>
              <br />
              <span className="text-gradient">Kumar Reddy</span>
            </h1>

            <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-4 animate-slide-in-left" style={{ animationDelay: "0.3s", opacity: 0 }}>
              <span className="text-lg md:text-2xl text-muted-foreground font-light">
                {displayed}
              </span>
              <span className="ml-0.5 w-0.5 h-6 md:h-8 bg-primary animate-pulse" />
            </div>

            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed text-sm md:text-base animate-slide-in-left" style={{ animationDelay: "0.4s", opacity: 0 }}>
              Building end-to-end ML solutions with Python, NLP, and scalable data systems.
              Passionate about turning data into intelligent, deployment-ready products.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start flex-wrap animate-slide-in-left" style={{ animationDelay: "0.5s", opacity: 0 }}>
              <Button variant="hero" size="lg" className="animate-pulse-glow" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-5 mt-10 animate-slide-in-left" style={{ animationDelay: "0.6s", opacity: 0 }}>
              {[
                { href: "https://github.com/vyza182-2", label: "GitHub", icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />, fill: true },
                { href: "https://vyzareddy.in/", label: "Portfolio", icon: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>, fill: false },
                { href: "https://www.linkedin.com/in/vyza-reddy", label: "LinkedIn", icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />, fill: true },
                { href: "mailto:vyza.18@gmail.com", label: "Email", icon: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>, fill: false },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={social.fill ? "currentColor" : "none"} stroke={social.fill ? "none" : "currentColor"} strokeWidth="2">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Photo section with animations */}
          <div className="flex-shrink-0 animate-slide-in-right" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Orbiting dots */}
              <div className="absolute inset-0 animate-orbit" style={{ animationDuration: "8s" }}>
                <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
              </div>
              <div className="absolute inset-0 animate-orbit" style={{ animationDuration: "12s", animationDelay: "-4s" }}>
                <div className="w-2 h-2 rounded-full bg-primary/60" />
              </div>
              <div className="absolute inset-0 animate-orbit" style={{ animationDuration: "15s", animationDelay: "-8s" }}>
                <div className="w-2 h-2 rounded-full bg-primary/40" />
              </div>

              {/* Glow rings */}
              <div className="absolute inset-[-8px] rounded-full border-2 border-primary/20 animate-glow-ring" />
              <div className="absolute inset-[-20px] rounded-full border border-primary/10 animate-glow-ring" style={{ animationDelay: "-1.5s" }} />
              <div className="absolute inset-[-32px] rounded-full border border-primary/5 animate-glow-ring" style={{ animationDelay: "-0.75s" }} />

              {/* Morphing background blob */}
              <div className="absolute inset-[-4px] bg-gradient-to-br from-primary/30 via-primary/10 to-primary/30 animate-morph blur-sm" />

              {/* Photo container with morph */}
              <div className="relative w-full h-full animate-morph overflow-hidden shadow-2xl" style={{ animationDelay: "-2s" }}>
                <img
                  src={profilePhoto}
                  alt="Vyza Shiva Kumar Reddy - ML Engineer"
                  className="w-full h-full object-cover"
                  width={640}
                  height={800}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-lg animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-lg animate-pulse" style={{ animationDelay: "1s" }} />

              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-primary/30 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-primary whitespace-nowrap">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
