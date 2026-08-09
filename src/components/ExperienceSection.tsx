import useScrollReveal from "@/hooks/useScrollReveal";

const experiences = [
  {
    role: "AI/ML Engineer",
    company: "Handshake.ai — Contract / Freelance",
    period: "Aug 2026 – Present",
    type: "Contract",
    points: [
      "Evaluate AI model outputs against project-specific quality guidelines to support model quality and reliability.",
      "Analyze structured and unstructured datasets used in Large Language Model development workflows.",
      "Perform data validation, preprocessing, and quality assurance to improve dataset consistency and usability.",
      "Document evaluation findings and collaborate through Git-based workflows to support continuous model improvement.",
    ],
  },
  {
    role: "Junior Data Analyst",
    company: "TAO Digital Solutions",
    period: "Aug 2025 – May 2026",
    type: "Full-time",
    points: [
      "Analyzed and validated structured and unstructured datasets supporting AI and machine learning initiatives.",
      "Performed data cleaning, preprocessing, annotation, and quality checks to prepare high-quality training datasets.",
      "Collaborated with AI engineers on dataset preparation for NLP and computer vision projects.",
      "Conducted validation checks to identify inconsistencies, missing values, and data-quality issues.",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="font-mono text-sm text-primary text-center mb-2 tracking-wider">03. Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Where I&apos;ve <span className="text-gradient">Worked</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border/50" />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={exp.company} className={`relative pl-12 md:pl-16 reveal ${isVisible ? "visible" : ""} reveal-delay-${i + 1}`}>
                <div className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                <div className="card-spider-hover rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-mono text-sm">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-xs rounded-full border border-primary/20 text-primary bg-primary/5 font-mono">{exp.type}</span>
                      <span className="text-muted-foreground text-xs font-mono">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.points.map((point) => (
                      <li key={point} className="text-secondary-foreground text-sm flex gap-3 leading-relaxed">
                        <span className="text-primary mt-1 shrink-0">▹</span>{point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
