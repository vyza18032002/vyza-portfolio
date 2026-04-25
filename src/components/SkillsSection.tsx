import useScrollReveal from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Programming & Databases",
    icon: "💻",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Machine Learning & AI",
    icon: "🧠",
    skills: ["Regression", "Classification", "Clustering", "NLP", "Time-Series Forecasting", "Deep Learning"],
  },
  {
    title: "Visualization",
    icon: "📊",
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    title: "Tools & Cloud",
    icon: "☁️",
    skills: ["Git/GitHub", "Docker", "Apache Spark", "Azure Data Services", "API Integration", "CI/CD", "Excel"],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding bg-muted/10">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="font-mono text-sm text-primary text-center mb-2 tracking-wider">02. Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((cat, i) => (
            <div key={cat.title} className={`card-spider-hover rounded-2xl p-6 reveal ${isVisible ? "visible" : ""} reveal-delay-${i + 1}`}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-foreground font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted/40 text-secondary-foreground border border-border/30 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
