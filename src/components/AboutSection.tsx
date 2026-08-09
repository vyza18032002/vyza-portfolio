import useScrollReveal from "@/hooks/useScrollReveal";

const stats = [
  { number: "2", label: "Professional Roles" },
  { number: "AI/ML", label: "Career Focus" },
  { number: "LLM", label: "Model Evaluation" },
  { number: "Python", label: "Primary Language" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="font-mono text-sm text-primary text-center mb-2 tracking-wider">01. About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Who <span className="text-gradient">I Am</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8">
          <div className={`md:col-span-3 reveal ${isVisible ? "visible" : ""} reveal-delay-1`}>
            <div className="card-spider rounded-2xl p-8">
              <p className="text-secondary-foreground leading-relaxed mb-5">
                AI/ML Engineer with a strong foundation in <span className="text-foreground font-medium">machine learning, data analytics, Python, and SQL</span>.
                Experienced in AI model evaluation, data preprocessing, dataset validation, and data quality assurance.
              </p>
              <p className="text-secondary-foreground leading-relaxed mb-5">
                Skilled in analyzing <span className="text-foreground font-medium">structured and unstructured data</span> for LLM, NLP, and computer vision workflows.
                I enjoy collaborating with engineering teams to improve AI model quality and build reliable, data-driven solutions.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {["Python", "Machine Learning", "LLM Evaluation", "SQL", "Data Analytics", "Data Quality"].map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full border border-primary/20 text-primary bg-primary/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`md:col-span-2 reveal ${isVisible ? "visible" : ""} reveal-delay-2`}>
            <div className="grid grid-cols-2 gap-4 h-full">
              {stats.map((stat) => (
                <div key={stat.label} className="card-spider-hover rounded-2xl p-5 flex flex-col items-center justify-center text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.number}</p>
                  <p className="text-muted-foreground text-xs font-mono">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
