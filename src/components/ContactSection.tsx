import { Button } from "@/components/ui/button";
import useScrollReveal from "@/hooks/useScrollReveal";

const contactItems = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
    label: "Email",
    value: "vyza.18@gmail.com",
    href: "mailto:vyza.18@gmail.com",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    label: "Phone",
    value: "+91 8187032002",
    href: "tel:+918187032002",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
    label: "Location",
    value: "Hyderabad, Telangana, India",
    href: "#",
  },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="section-padding bg-muted/10">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="font-mono text-sm text-primary text-center mb-2 tracking-wider">06. Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            I'm currently looking for ML Engineer opportunities. Feel free to reach out!
          </p>
        </div>

        <div className={`max-w-2xl mx-auto reveal ${isVisible ? "visible" : ""} reveal-delay-1`}>
          <div className="card-glass-hover rounded-2xl p-8 md:p-12">
            <div className="space-y-3 mb-10">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs font-mono">{item.label}</p>
                    <p className="text-foreground group-hover:text-primary transition-colors font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="hero" size="lg" className="animate-pulse-glow" asChild>
                <a href="mailto:vyza.18@gmail.com">Send Email</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://github.com/vyza182-2" target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://vyzareddy.in/" target="_blank" rel="noopener noreferrer">Portfolio</a>
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              {["Analytical Thinking", "Problem Solving", "Communication", "Business Acumen", "Team Collaboration"].map(skill => (
                <span key={skill} className="px-3 py-1.5 text-xs font-mono rounded-full border border-border/50 text-muted-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
