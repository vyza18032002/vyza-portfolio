import useScrollReveal from "@/hooks/useScrollReveal";

const stats = [
  { number: "1 Yr", label: "Experience" },
  { number: "AI/ML", label: "Model Evaluation" },
  { number: "5+", label: "Certifications" },
  { number: "Python & SQL", label: "Core Tech Stack" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="font-dot text-xs text-blue-400 text-center mb-2 tracking-widest uppercase">01. OVERVIEW</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center tracking-wider font-dot uppercase">
            ABOUT <span className="text-gradient">ME</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8">
          <div className={`md:col-span-3 reveal ${isVisible ? "visible" : ""} reveal-delay-1`}>
            <div className="card-pro rounded-2xl p-8 border-slate-800/80 bg-slate-900/50">
              <p className="text-slate-300 leading-relaxed mb-4 text-sm md:text-base">
                I am an <span className="text-white font-semibold">ML Data Associate &amp; AI/ML Engineer</span> with 1 year of experience proficient in <span className="text-white font-semibold">Machine Learning, Data Analytics, Python, SQL, and Generative AI</span>.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm md:text-base">
                Experienced in <span className="text-white font-semibold">AI model evaluation, data preprocessing, dataset validation</span>, and developing robust datasets for machine learning applications. Skilled in analyzing both structured and unstructured data and collaborating with cross-functional engineering teams using Git-based workflows to drive continuous model performance.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                Passionate about building practical AI solutions using Python, NLP, LLMs, and data-driven technologies.
              </p>
              
              <div className="border-t border-slate-800/80 pt-5 mt-5 grid sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-blue-400 font-semibold uppercase tracking-wider block mb-1">Languages Spoken</span>
                  <p className="text-slate-300">English, Telugu, Hindi</p>
                </div>
                <div>
                  <span className="text-blue-400 font-semibold uppercase tracking-wider block mb-1">Hobbies &amp; Interests</span>
                  <p className="text-slate-300">Technical Blogging, Competitive Coding, AI Research Reading</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {["Python", "SQL", "Model Evaluation", "Dataset Validation", "Generative AI", "Git Workflows"].map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full border border-blue-500/20 text-blue-300 bg-blue-500/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`md:col-span-2 reveal ${isVisible ? "visible" : ""} reveal-delay-2`}>
            <div className="grid grid-cols-2 gap-4 h-full">
              {stats.map((stat) => (
                <div key={stat.label} className="card-pro-hover rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-slate-900/40">
                  <p className="text-2xl md:text-3xl font-extrabold text-gradient mb-2">{stat.number}</p>
                  <p className="text-slate-400 text-xs font-mono">{stat.label}</p>
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
