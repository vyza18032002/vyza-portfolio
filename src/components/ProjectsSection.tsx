import useScrollReveal from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Customer Churn Prediction",
    desc: "Built a predictive model using Logistic Regression & Random Forest achieving 82% accuracy to identify at-risk customers.",
    tags: ["Python", "Scikit-learn", "Pandas", "ML"],
    color: "from-primary/10 to-primary/5",
  },
  {
    title: "YouTube Summarizer",
    desc: "Flask app powered by Gemini API for NLP-based transcript extraction and intelligent video summarization.",
    tags: ["Flask", "Gemini API", "NLP", "Python"],
    color: "from-primary/10 to-transparent",
  },
  {
    title: "Malware Detection System",
    desc: "ML classifier using SVM & Random Forest to detect malicious Android APKs with high precision.",
    tags: ["SVM", "Random Forest", "Security", "ML"],
    color: "from-transparent to-primary/10",
  },
  {
    title: "LMS Portal",
    desc: "Learning Management System built with Django and Gemini API featuring automated video analysis & summarization.",
    tags: ["Django", "Gemini API", "Full Stack", "AI"],
    color: "from-primary/5 to-primary/10",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding bg-muted/10">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="font-mono text-sm text-primary text-center mb-2 tracking-wider">04. Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What I've <span className="text-gradient">Built</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <div key={p.title} className={`reveal ${isVisible ? "visible" : ""} reveal-delay-${i + 1}`}>
              <div className="card-spider-hover rounded-2xl p-6 h-full group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                  </div>
                  <p className="text-secondary-foreground text-sm mb-5 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-mono border border-primary/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
