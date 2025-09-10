"use client"
import React, { useEffect, useState } from "react"
import { useLanguage } from "@/context/LanguageContext"  // جديد
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Cpu,
  Lightbulb,
  Code2,
  Users,
  Star,
  Database,
  Package,
  PackageOpen,
  Bot,
  BotMessageSquare,
  Computer,
  Code,
  Github,
  Presentation
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const skillsData = [
  {
    name: "Node.js / Express",
    level: 80,
    icon: <Cpu className="w-5 h-5" />,
    category: "Backend"
  },
  {
    name: "PHP",
    level: 90,
    icon: <Cpu className="w-5 h-5" />,
    category: "Backend"
  },
  {
    name: "Larval",
    level: 85,
    icon: <Cpu className="w-5 h-5" />,
    category: "Backend"
  },
  {
    name: "Pl/Sql",
    level: 90,
    icon: <Database className="w-5 h-5" />,
    category: "Backend"
  },
  {
    name: "MYSQL",
    level: 85,
    icon: <Database className="w-5 h-5" />,
    category: "Backend"
  },
  {
    name: "MongoDB",
    level: 75,
    icon: <Database className="w-5 h-5" />,
    category: "Backend"
  },

  {
    name: "HTML / PugJs",
    level: 95,
    icon: <Code2 className="w-5 h-5" />,
    category: "Frontend"
  },
  {
    name: "CSS / SCSS",
    level: 95,
    icon: <Code2 className="w-5 h-5" />,
    category: "Frontend"
  },
  {
    name: "JavaScript",
    level: 90,
    icon: <Code2 className="w-5 h-5" />,
    category: "Frontend"
  },
  {
    name: "React / Next.js",
    level: 83,
    icon: <Code2 className="w-5 h-5" />,
    category: "Frontend"
  },
  {
    name: "GulpJs",
    level: 85,
    icon: <Code2 className="w-5 h-5" />,
    category: "Frontend"
  },

  {
    name: "Bootstrap",
    level: 85,
    icon: <PackageOpen className="w-5 h-5" />,
    category: "Framework"
  },
  {
    name: "MUI",
    level: 80,
    icon: <PackageOpen className="w-5 h-5" />,
    category: "Framework"
  },
  {
    name: "Shadcn/ui",
    level: 70,
    icon: <PackageOpen className="w-5 h-5" />,
    category: "Framework"
  },
  {
    name: "tailwind css",
    level: 75,
    icon: <PackageOpen className="w-5 h-5" />,
    category: "Framework"
  },

  {
    name: "Git & Github",
    level: 88,
    icon: <Github className="w-5 h-5" />,
    category: "Technical"
  },
  {
    name: "Java",
    level: 75,
    icon: <Code className="w-5 h-5" />,
    category: "Technical"
  },
  {
    name: "c++",
    level: 80,
    icon: <Code className="w-5 h-5" />,
    category: "Technical"
  },
  {
    name: "Python",
    level: 70,
    icon: <Code className="w-5 h-5" />,
    category: "Technical"
  },

  {
    name: "AI Chat",
    level: 95,
    icon: <BotMessageSquare className="w-5 h-5" />,
    category: "AI"
  },
  {
    name: "Firebase studio",
    level: 85,
    icon: <Bot className="w-5 h-5" />,
    category: "AI"
  },
  {
    name: "Canva code",
    level: 65,
    icon: <Bot className="w-5 h-5" />,
    category: "AI"
  },
  {
    name: "Frontier AI: frontend generator",
    level: 70,
    icon: <Bot className="w-5 h-5" />,
    category: "AI"
  },

  {
    name: "Problem Solving",
    level: 95,
    icon: <Lightbulb className="w-5 h-5" />,
    category: "Soft"
  },
  {
    name: "Team Collaboration",
    level: 90,
    icon: <Users className="w-5 h-5" />,
    category: "Soft"
  },
  {
    name: "Adaptability",
    level: 88,
    icon: <Star className="w-5 h-5" />,
    category: "Soft"
  },
  {
    name: "Presentation",
    level: 90,
    icon: <Presentation className="w-5 h-5" />,
    category: "Soft"
  }
]
const translations = {
  en: {
    title: "My Skills",
    subtitle: "Constellations of My Expertise",
    backend: "Backend Skills",
    frontend: "Frontend Skills",
    framework: "Frameworks & Libraries",
    technical: "Technical Skills",
    ai: "AI Tools",
    soft: "Soft Skills"
  },
  ar: {
    title: "مهاراتي",
    subtitle: "مجرّات خبرتي",
    backend: "مهارات الـBackend",
    frontend: "مهارات الـFrontend",
    framework: "الأُطر والمكتبات",
    technical: "مهارات تقنية",
    ai: "أدوات الذكاء الاصطناعي",
    soft: "مهارات أخرى"
  }
}
const cardsConfig = (language) => [
  {
    key: "backend",
    icon: <Cpu className={`${language==="en" ? "mr-3" : "ml-3"} h-7 w-7 text-primary`} />,
    title: translations[language].backend,
    filter: "Backend"
  },
  {
    key: "frontend",
    icon: <Code2 className={`${language==="en" ? "mr-3" : "ml-3"} h-7 w-7 text-primary`} />,
    title: translations[language].frontend,
    filter: "Frontend"
  },
  {
    key: "framework",
    icon: <Package className={`${language==="en" ? "mr-3" : "ml-3"} h-7 w-7 text-primary`} />,
    title: translations[language].framework,
    filter: "Framework"
  },
  {
    key: "technical",
    icon: <Computer className={`${language==="en" ? "mr-3" : "ml-3"} h-7 w-7 text-primary`} />,
    title: translations[language].technical,
    filter: "Technical"
  },
  {
    key: "ai",
    icon: <Bot className={`${language==="en" ? "mr-3" : "ml-3"} h-7 w-7 text-primary`} />,
    title: translations[language].ai,
    filter: "AI"
  },
  {
    key: "soft",
    icon: <Lightbulb className={`${language==="en" ? "mr-3" : "ml-3"} h-7 w-7 text-primary`} />,
    title: translations[language].soft,
    filter: "Soft"
  }
]

function SkillItem({ skill, isVisible, language }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isVisible) {
      // Start animation slightly after the card becomes visible for better effect
      const timer = setTimeout(() => setProgress(skill.level), 200) // 200ms delay
      return () => clearTimeout(timer)
    }
  }, [skill.level, isVisible])

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
        <span className="flex items-center">
          {React.cloneElement(skill.icon, {
            className: `${language=="en" ? "mr-2" : "ml-2"} h-5 w-5 text-primary`
          })}
          {skill.name}
        </span>
        <span>{skill.level}%</span>
      </div>
      <Progress
        dir={language === "ar" ? "rtl" : "ltr"}
        value={progress}
        className="h-2 [&>div]:bg-primary transition-all duration-500 ease-out"
        aria-label={`${skill.name} proficiency ${skill.level}%`}
      />
    </div>
  )
}

function SkillCard({ title, icon, filter, language }) {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  })

  const skills = skillsData.filter(s => s.category === filter)

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Card className="shadow-xl bg-card/80">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl font-headline text-foreground">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {skills.map(skill => (
            <SkillItem key={skill.name} skill={skill} isVisible={isVisible} language={language} />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export function SkillsSection() {
  const { language } = useLanguage()

  return (
    <section dir={language==="en" ? "ltr" : "rtl"} id="skills" className="py-16 md:py-24 bg-background/80 backdrop-blur-sm">
      <div className="container max-w-screen-lg px-4 mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-bold font-headline text-foreground sm:text-5xl">
            {translations[language].title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {translations[language].subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {cardsConfig(language).map(cfg => (
            <SkillCard
              key={cfg.key}
              title={cfg.title}
              icon={cfg.icon}
              filter={cfg.filter}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


