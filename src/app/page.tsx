import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutMeSection } from '@/components/sections/about-me-section';
import { EducationSection } from '@/components/sections/education-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutMeSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
