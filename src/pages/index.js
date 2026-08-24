import Head from "next/head";
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
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { Toaster } from "@/components/ui/toast";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://moajabali.com";

const titleEn =
  "Mohammed Aljablai | Full-Stack Developer - Portfolio";
const titleAr = "محمد الجبلي | مطور ويب متكامل - بورتفوليو";

const descriptionEn =
  "Portfolio of Mohammed Aljablai - Full-Stack Developer specializing in Next.js, React, Node.js, and Laravel. Explore my projects, skills, and services in web development.";
const descriptionAr =
  "بورتفوليو لمحمد الجبلي - مطور ويب متكامل متخصص في Next.js و React و Node.js و Laravel. استعرض مشاريعي ومهاراتي وخدماتي في تطوير الويب.";

const keywords = [
  "Mohammed Aljablai",
  "Mo Ajabali",
  "Full-Stack Developer",
  "Portfolio",
  "Next.js",
  "React",
  "Node.js",
  "Laravel",
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "JavaScript",
  "TypeScript",
  "PHP",
  "مطور ويب",
  "محمد الجبلي",
  "بورتفوليو",
  "مطور متكامل"
];

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}

function HomeContent() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const title = isAr ? titleAr : titleEn;
  const description = isAr ? descriptionAr : descriptionEn;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="abstract" content={description} />
        <meta name="summary" content={description} />
        <meta name="subject" content="Full-Stack Developer Portfolio" />
        <meta name="topic" content="Web Development Portfolio" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}/profile.png`} />
        <meta property="og:image:secure_url" content={`${siteUrl}/profile.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mohammed Aljablai - Full-Stack Developer" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/profile.png`} />
        <meta name="twitter:image:alt" content="Mohammed Aljablai - Full-Stack Developer" />

        <meta property="article:author" content="Mohammed Aljablai" />
        <meta property="article:published_time" content="2026-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={new Date().toISOString()} />

        <link rel="canonical" href={siteUrl} />
      </Head>

      <Toaster />
      <div className="flex flex-col min-h-screen">
        <div
          className="fixed wallpaper opacity-20 inset-0 z-[-1]"
          data-ai-hint="abstract particles"
          aria-hidden="true"
        ></div>
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutMeSection />
          <EducationSection />
          <SelfLearningSection />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
