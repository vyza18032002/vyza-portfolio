import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AIChartBotSection from "@/components/AIChartBotSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollSpiderMan from "@/components/ScrollSpiderMan";

const Index = () => (
  <div className="min-h-screen bg-background spider-web-pattern">
    <ScrollSpiderMan />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <AIChartBotSection />
    <EducationSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
