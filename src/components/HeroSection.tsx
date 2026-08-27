import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const roles = [
  "ML DATA ASSOCIATE",
  "AI/ML ENGINEER",
  "GENERATIVE AI DEVELOPER",
  "LLM & DATA SPECIALIST"
];

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Glow Orbs & Rings */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-blue-500/10 rounded-full animate-spin-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="font-dot text-xs text-blue-300 tracking-widest font-semibold uppercase">HYDERABAD, INDIA • 1 YEAR EXPERIENCE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 tracking-wider leading-tight font-dot">
              <span className="text-foreground">VYZA SHIVA</span>
              <br />
              <span className="text-gradient">KUMAR REDDY</span>
            </h1>

            <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-5">
              <span className="text-base md:text-xl text-blue-400 font-dot font-medium tracking-wider">
                &gt; {displayed}
              </span>
              <span className="ml-1 w-2 h-5 md:h-7 bg-blue-400 animate-pulse" />
            </div>

            <p className="text-slate-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-sm md:text-base font-sans">
              AI/ML Engineer proficient in Machine Learning, Data Analytics, Python, SQL, and Generative AI. Experienced in AI model evaluation, data preprocessing, dataset validation, and building LLM-driven applications.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <Button variant="hero" size="lg" className="animate-pulse-glow bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-dot tracking-wider shadow-lg border-none" asChild>
                <a href="#projects">VIEW PROJECTS</a>
              </Button>
              <Button variant="heroOutline" size="lg" className="border-slate-700 hover:border-blue-500/50 hover:bg-blue-500/10 text-foreground font-dot tracking-wider" asChild>
                <a href="#contact">GET IN TOUCH</a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-10">
              {[
                { href: "https://github.com/vyza182-2", label: "GitHub", icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />, fill: true },
                { href: "https://vyzareddy.in/", label: "Portfolio", icon: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>, fill: false },
                { href: "mailto:vyza.18@gmail.com", label: "Email", icon: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>, fill: false },
                { href: "tel:+918187032002", label: "Phone", icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>, fill: false },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") || social.href.startsWith("tel") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:scale-105 transition-all duration-300 bg-slate-900/60 backdrop-blur-sm"
                  aria-label={social.label}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={social.fill ? "currentColor" : "none"} stroke={social.fill ? "none" : "currentColor"} strokeWidth="2">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Photo section */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer decorative gradient border */}
              <div className="absolute inset-[-4px] bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 rounded-3xl blur-md opacity-40 animate-pulse-glow" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-900">
                <img
                  src={profilePhoto}
                  alt="Vyza Shiva Kumar Reddy - ML Data Associate & AI/ML Engineer"
                  className="w-full h-full object-cover"
                  width={640}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-slate-900/90 backdrop-blur-md border border-blue-500/40 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-dot font-semibold text-blue-300 whitespace-nowrap tracking-wider uppercase">ML DATA ASSOCIATE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-blue-500" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
