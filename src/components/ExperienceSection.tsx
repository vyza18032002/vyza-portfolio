import useScrollReveal from "@/hooks/useScrollReveal";

const experiences = [
  {
    role: "Data Annotator",
    company: "TAO Digital Solutions – Hyderabad",
    period: "Recent",
    type: "Full-time",
    points: [
      "Annotated and validated large-scale text, image, and video datasets (>95% accuracy).",
      "Performed data quality checks ensuring consistency and reliability.",
      "Supported Data Scientists in NLP & Computer Vision projects.",
      "Exposure to ML lifecycle: data collection → preprocessing → annotation → model training.",
    ],
  },
  {
    role: "Python Full Stack Developer Intern",
    company: "Quantum Works IT Solution",
    period: "Feb 2025 – Jul 2025",
    type: "Internship",
    points: [
      "Developed APIs and dashboards using Python, Django, React.js, and SQL.",
      "Optimized MySQL queries for better reporting performance.",
      "Collaborated with cross-functional teams for data-centric solutions.",
    ],
  },
  
  {
    role: "Python Developer Intern",
    company: "EduGene Technologies",
    period: "Sep 2022 – Nov 2022",
    type: "Internship",
    points: [
      "Designed Python scripts for automating data cleaning workflows.",
      "Improved performance in existing data-driven applications.",
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
            Where I've <span className="text-gradient">Worked</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border/50" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className={`relative pl-12 md:pl-16 reveal ${isVisible ? "visible" : ""} reveal-delay-${i + 1}`}>
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="card-spider-hover rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-mono text-sm">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-xs rounded-full border border-primary/20 text-primary bg-primary/5 font-mono">
                        {exp.type}
                      </span>
                      <span className="text-muted-foreground text-xs font-mono">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-secondary-foreground text-sm flex gap-3 leading-relaxed">
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        {p}
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
