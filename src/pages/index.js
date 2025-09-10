import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutMeSection } from "@/components/sections/about-me-section";
import { EducationSection } from "@/components/sections/education-section";
import { SelfLearningSection } from "@/components/sections/self-learning-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ContactSection } from "@/components/sections/contact-section";
import { LanguageProvider, useLanguage} from "@/context/LanguageContext";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen " >
        <div className="fixed wallpaper opacity-20 inset-0 z-[-1]" data-ai-hint="abstract particles" aria-hidden="true"></div>
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutMeSection />
          <EducationSection />
          <SelfLearningSection /> 
          <SkillsSection />
          <ProjectsSection  />
          <ServicesSection  />
          <ContactSection  />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
