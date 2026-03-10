import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import AboutSection from "@/components/sections/AboutSection";
import AcademicSection from "@/components/sections/AcademicSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ToothViewerSection from "@/components/sections/ToothViewerSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)" }} className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <AcademicSection />
      <SkillsSection />
      <ToothViewerSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
