import useScrollReveal from "@/hooks/useScrollReveal";

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="font-mono text-sm text-primary text-center mb-2 tracking-wider">06. Education</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My <span className="text-gradient">Education</span></h2>
        </div>
        <div className="max-w-xl mx-auto">
          <div className={`card-spider-hover rounded-2xl p-6 md:p-8 reveal ${isVisible ? "visible" : ""} reveal-delay-1`}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-4">B.Tech – Artificial Intelligence &amp; Machine Learning</h3>
            <p className="text-primary font-mono text-sm">CMR Technical Campus</p>
            <div className="flex items-center gap-3 mt-3">
              <span className="px-2 py-0.5 text-xs rounded-full border border-border/50 text-muted-foreground font-mono">2020 – 2024</span>
              <span className="px-2 py-0.5 text-xs rounded-full border border-primary/20 text-primary bg-primary/5 font-mono">CGPA: 6.88</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
