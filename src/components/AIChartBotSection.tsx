import { useState } from "react";
import { Button } from "@/components/ui/button";
import useScrollReveal from "@/hooks/useScrollReveal";
import profilePhoto from "@/assets/profile-photo.jpg";

type AssistantAnswer = { title: string; text: string; action?: { label: string; href: string }; photo?: boolean };

const suggestions = ["Who is Shiva?", "Show Shiva's photo", "What are Shiva's skills?", "Tell me about Shiva's experience", "Where is Shiva based?", "How can I contact Shiva?"];

const getAnswer = (question: string): AssistantAnswer => {
  const query = question.toLowerCase();
  if (query.includes("photo") || query.includes("image") || query.includes("picture") || query.includes("look like")) return { title: "Shiva’s Profile Photo", text: "Here is Vyza Shiva Kumar Reddy, an AI/ML Engineer based in Hyderabad, Telangana.", photo: true, action: { label: "View Profile", href: "#home" } };
  if (query.includes("summary") || query.includes("about") || query.includes("who is") || query.includes("who's")) return { title: "About Shiva", text: "Vyza Shiva Kumar Reddy is an AI/ML Engineer based in Hyderabad, Telangana. He has a strong foundation in machine learning, data analytics, Python, SQL, and generative AI. His work includes AI model evaluation, data preprocessing, dataset validation, and developing high-quality datasets for machine learning applications.", action: { label: "View About", href: "#about" } };
  if (query.includes("skill") || query.includes("technology") || query.includes("tech stack")) return { title: "Technical Skills", text: "Shiva’s technical skills include Python and SQL; Scikit-learn, TensorFlow, PyTorch (Basics), regression, classification, clustering, model evaluation, and feature engineering. He also works with LLM evaluation, prompt engineering, Gemini API, AI model validation, Pandas, NumPy, Excel, Power BI, Tableau, MySQL, PostgreSQL, MongoDB, Git, GitHub, REST APIs, Jupyter Notebook, and VS Code.", action: { label: "View Skills", href: "#skills" } };
  if (query.includes("experience") || query.includes("work") || query.includes("job") || query.includes("handshake") || query.includes("tao")) return { title: "Experience", text: "Shiva is a Contract / Freelance AI/ML Engineer at Handshake.ai (Aug 2026–Present), where he evaluates and improves AI model outputs, analyzes structured and unstructured data for LLM development, performs validation and preprocessing, and documents findings through Git-based workflows. Previously, he was a Junior Data Analyst at TAO Digital Solutions (Aug 2025–May 2026), preparing and validating datasets for AI, NLP, and computer vision projects.", action: { label: "View Experience", href: "#experience" } };
  if (query.includes("project") || query.includes("built") || query.includes("portfolio")) return { title: "Projects", text: "Shiva has built projects including an AI Chart Bot, Customer Churn Prediction model, YouTube Summarizer using Gemini API, Malware Detection System, and an LMS Portal with AI-powered video analysis.", action: { label: "View Projects", href: "#projects" } };
  if (query.includes("education") || query.includes("college") || query.includes("degree") || query.includes("study") || query.includes("cgpa")) return { title: "Education", text: "Shiva completed a B.Tech in Artificial Intelligence & Machine Learning from CMR Technical Campus (2020–2024), with a CGPA of 6.88.", action: { label: "View Education", href: "#education" } };
  if (query.includes("competenc") || query.includes("strength") || query.includes("soft skill")) return { title: "Core Competencies", text: "Shiva’s core competencies are machine learning, data analytics, generative AI, problem solving, analytical thinking, team collaboration, and communication." };
  if (query.includes("location") || query.includes("based") || query.includes("hyderabad") || query.includes("city")) return { title: "Location", text: "Shiva is based in Hyderabad, Telangana, India." };
  if (query.includes("contact") || query.includes("phone") || query.includes("mobile") || query.includes("email") || query.includes("reach") || query.includes("hire")) return { title: "Contact Shiva", text: "You can contact Shiva by phone at +91 8187032002 or email at vyza.18@gmail.com. His GitHub is github.com/vyza182-2 and his portfolio is vyzareddy.in.", action: { label: "Contact Shiva", href: "#contact" } };
  return { title: "Lollipop AI", text: "Vyza Shiva Kumar Reddy is an AI/ML Engineer based in Hyderabad, Telangana. Ask me about his profile photo, professional summary, technical skills, experience, projects, education, core competencies, location, or contact details." };
};

const AIChartBotSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState<AssistantAnswer>({ title: "Welcome to Lollipop AI", text: "Hi! I’m Shiva’s portfolio assistant. Ask me anything about Shiva’s skills, experience, projects, or photo." });
  const search = (question = query) => {
    const cleanQuestion = question.trim();
    if (cleanQuestion) setAnswer(getAnswer(cleanQuestion));
    if (question !== query) setQuery(question);
  };

  return (
    <section id="chart-bot" className="section-padding">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <div className="flex justify-center mb-3"><span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-mono text-emerald-400">● Online · Portfolio-trained</span></div>
          <p className="font-mono text-sm text-primary text-center mb-2 tracking-wider">05. PORTFOLIO ASSISTANT</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"><span className="text-gradient">Lollipop AI</span></h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Search this portfolio and learn more about Shiva’s background, work, and projects.</p>
        </div>
        <div className={`max-w-3xl mx-auto card-spider rounded-2xl p-5 md:p-8 reveal ${isVisible ? "visible" : ""} reveal-delay-1`}>
          <form onSubmit={(event) => { event.preventDefault(); search(); }} className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="shiva-search" className="sr-only">Ask Lollipop AI about Shiva</label>
            <input id="shiva-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ask about Shiva, for example: I want Shiva's photo" className="flex-1 rounded-xl border border-border/60 bg-muted/20 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary" />
            <Button type="submit" variant="hero">Search</Button>
          </form>
          <div className="flex flex-wrap gap-2 my-5">
            {suggestions.map((suggestion) => <button key={suggestion} type="button" onClick={() => search(suggestion)} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-mono text-primary transition-colors hover:bg-primary/10">{suggestion}</button>)}
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
            <div className="flex items-center justify-between gap-4 mb-3"><p className="font-mono text-xs text-primary">LOLLIPOP AI RESPONSE</p><span className="text-xs text-muted-foreground">Portfolio knowledge</span></div>
            <h3 className="font-semibold text-foreground mb-2">{answer.title}</h3>
            <p className="text-secondary-foreground leading-relaxed">{answer.text}</p>
            {answer.photo && <img src={profilePhoto} alt="Vyza Shiva Kumar Reddy" className="mt-5 h-44 w-36 rounded-xl border border-primary/30 object-cover shadow-lg" />}
            {answer.action && <a href={answer.action.href} className="inline-flex mt-5 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">{answer.action.label} →</a>}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            <a href="tel:+918187032002" className="rounded-lg border border-border/60 px-3 py-2 text-secondary-foreground transition-colors hover:border-primary hover:text-primary">Call: +91 8187032002</a>
            <a href="mailto:vyza.18@gmail.com" className="rounded-lg border border-border/60 px-3 py-2 text-secondary-foreground transition-colors hover:border-primary hover:text-primary">Email: vyza.18@gmail.com</a>
            <a href="https://github.com/vyza182-2" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border/60 px-3 py-2 text-secondary-foreground transition-colors hover:border-primary hover:text-primary">GitHub Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChartBotSection;
