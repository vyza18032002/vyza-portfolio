import useScrollReveal from "@/hooks/useScrollReveal";

const skillCategories = [
  { title: "Programming & Data", icon: "💻", skills: ["Python", "SQL", "Pandas", "NumPy", "MySQL", "PostgreSQL", "MongoDB", "Excel"] },
  { title: "Machine Learning & AI", icon: "🧠", skills: ["Scikit-learn", "TensorFlow", "PyTorch (Basics)", "Regression", "Classification", "Clustering", "Feature Engineering", "Model Evaluation"] },
  { title: "Generative AI & Analytics", icon: "📊", skills: ["LLM Evaluation", "Prompt Engineering", "Gemini API", "AI Model Validation", "Power BI", "Tableau", "EDA", "Data Visualization"] },
  { title: "Tools & Practices", icon: "🛠️", skills: ["Git", "GitHub", "REST APIs", "Jupyter Notebook", "VS Code", "Data Cleaning", "Data Preprocessing", "Data Quality Assurance"] },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="skills" className="section-padding bg-muted/10">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="font-mono text-sm text-primary text-center mb-2 tracking-wider">02. Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My <span className="text-gradient">Tech Stack</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, i) => (
            <div key={category.title} className={`card-spider-hover rounded-2xl p-6 reveal ${isVisible ? "visible" : ""} reveal-delay-${i + 1}`}>
              <div className="flex items-center gap-3 mb-5"><span className="text-2xl">{category.icon}</span><h3 className="text-foreground font-semibold">{category.title}</h3></div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted/40 text-secondary-foreground border border-border/30 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default">{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
