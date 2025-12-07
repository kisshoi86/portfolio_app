import { HeaderNav } from "@/components/header-nav";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { WorkSection } from "@/components/work-section";
import { SkillsSection } from "@/components/skills-section";
import { AwardsSection } from "@/components/awards-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />
      <main>
        <Hero />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
