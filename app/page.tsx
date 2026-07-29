import { Navbar } from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      {/* Hero Card */}
      <HeroSection />
      {/* About Me */}
      <AboutSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Experiences */}
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
