import useScrollReveal from "@/hooks/useScrollReveal";

const stats = [
  { number: "4+", label: "Projects Built" },
  { number: "3+", label: "Internships" },
  { number: "3", label: "Certifications" },
  { number: "82%", label: "Best ML Accuracy" },
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
                Machine Learning Engineer with a strong foundation in <span className="text-foreground font-medium">Python, SQL, and applied ML</span>. Experienced in building
                end-to-end ML solutions including data preprocessing, model development, and deployment-ready pipelines.
              </p>
              <p className="text-secondary-foreground leading-relaxed mb-5">
                Skilled in <span className="text-foreground font-medium">NLP, predictive modeling, and scalable data systems</span>. Familiar with Docker and CI/CD workflows.
                Seeking high-impact ML Engineer roles where I can contribute to building intelligent, data-driven products.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {["Python", "ML/AI", "NLP", "SQL", "Docker", "CI/CD"].map(tag => (
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
