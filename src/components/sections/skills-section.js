"use client"
import React, { useEffect, useState } from "react"
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
    icon: <Cpu className="h-5 w-5" />,
    category: "Backend"
  },
  {
    name: "PHP",
    level: 90,
    icon: <Cpu className="h-5 w-5" />,
    category: "Backend"
  },
  {
    name: "Larval",
    level: 85,
    icon: <Cpu className="h-5 w-5" />,
    category: "Backend"
  },
  {
    name: "Pl/Sql",
    level: 90,
    icon: <Database className="h-5 w-5" />,
    category: "Backend"
  },
  {
    name: "MYSQL",
    level: 85,
    icon: <Database className="h-5 w-5" />,
    category: "Backend"
  },
  {
    name: "MongoDB",
    level: 75,
    icon: <Database className="h-5 w-5" />,
    category: "Backend"
  },

  {
    name: "HTML / PugJs",
    level: 95,
    icon: <Code2 className="h-5 w-5" />,
    category: "Frontend"
  },
  {
    name: "CSS / SCSS",
    level: 95,
    icon: <Code2 className="h-5 w-5" />,
    category: "Frontend"
  },
  {
    name: "JavaScript",
    level: 90,
    icon: <Code2 className="h-5 w-5" />,
    category: "Frontend"
  },
  {
    name: "React / Next.js",
    level: 83,
    icon: <Code2 className="h-5 w-5" />,
    category: "Frontend"
  },
  {
    name: "GulpJs",
    level: 85,
    icon: <Code2 className="h-5 w-5" />,
    category: "Frontend"
  },

  {
    name: "Bootstrap",
    level: 85,
    icon: <PackageOpen className="h-5 w-5" />,
    category: "Framework"
  },
  {
    name: "MUI",
    level: 80,
    icon: <PackageOpen className="h-5 w-5" />,
    category: "Framework"
  },
  {
    name: "Shadcn/ui",
    level: 70,
    icon: <PackageOpen className="h-5 w-5" />,
    category: "Framework"
  },
  {
    name: "tailwind css",
    level: 75,
    icon: <PackageOpen className="h-5 w-5" />,
    category: "Framework"
  },

  {
    name: "Git & Github",
    level: 88,
    icon: <Github className="h-5 w-5" />,
    category: "Technical"
  },
  {
    name: "Java",
    level: 75,
    icon: <Code className="h-5 w-5" />,
    category: "Technical"
  },
  {
    name: "c++",
    level: 80,
    icon: <Code className="h-5 w-5" />,
    category: "Technical"
  },
  {
    name: "Python",
    level: 70,
    icon: <Code className="h-5 w-5" />,
    category: "Technical"
  },

  {
    name: "AI Chat",
    level: 95,
    icon: <BotMessageSquare className="h-5 w-5" />,
    category: "AI"
  },
  {
    name: "Firebase studio",
    level: 85,
    icon: <Bot className="h-5 w-5" />,
    category: "AI"
  },
  {
    name: "Canva code",
    level: 65,
    icon: <Bot className="h-5 w-5" />,
    category: "AI"
  },
  {
    name: "Frontier AI: frontend generator",
    level: 70,
    icon: <Bot className="h-5 w-5" />,
    category: "AI"
  },

  {
    name: "Problem Solving",
    level: 95,
    icon: <Lightbulb className="h-5 w-5" />,
    category: "Soft"
  },
  {
    name: "Team Collaboration",
    level: 90,
    icon: <Users className="h-5 w-5" />,
    category: "Soft"
  },
  {
    name: "Adaptability",
    level: 88,
    icon: <Star className="h-5 w-5" />,
    category: "Soft"
  },
  {
    name: "Presentation",
    level: 90,
    icon: <Presentation className="h-5 w-5" />,
    category: "Soft"
  }
]

function SkillItem({ skill, isVisible }) {
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
            className: "mr-2 h-5 w-5 text-primary"
          })}
          {skill.name}
        </span>
        <span>{skill.level}%</span>
      </div>
      <Progress
        value={progress}
        className="h-2 [&>div]:bg-primary transition-all duration-500 ease-out"
        aria-label={`${skill.name} proficiency ${skill.level}%`}
      />
    </div>
  )
}

export function SkillsSection() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  })
  const [headerRef, isHeaderVisible] = useScrollAnimation({
    threshold: 0.5,
    triggerOnce: true
  })
  const [backendCardRef, isBackendCardVisible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  })
  const [frontendCardRef, isFrontendCardVisible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  })
  const [frameworkCardRef, isFrameworkCardVisible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  })
  const [techCardRef, isTechCardVisible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  })
  const [aiCardRef, isAiCardVisible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  })
  const [softCardRef, isSoftCardVisible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  })

  const technicalSkills = skillsData.filter(s => s.category === "Technical")
  const softSkills = skillsData.filter(s => s.category === "Soft")
  const backendSkills = skillsData.filter(s => s.category === "Backend")
  const frontendSkills = skillsData.filter(s => s.category === "Frontend")
  const frameworkSkills = skillsData.filter(s => s.category === "Framework")
  const aiSkills = skillsData.filter(s => s.category === "AI")

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-16 md:py-24 bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-screen-lg px-4">
        <header
          ref={headerRef}
          className={`mb-12 text-center transition-all duration-700 ease-out ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isHeaderVisible ? "0.05s" : "0s" }}
        >
          <h2 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">
            My Skill
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Constellations of My Expertise
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div
            ref={backendCardRef}
            className={`transition-all duration-700 ease-out ${
              isBackendCardVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isBackendCardVisible ? "0.1s" : "0s" }}
          >
            <Card className="bg-card/80 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center text-foreground">
                  <Cpu className="mr-3 h-7 w-7 text-primary" />
                  Backend Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {backendSkills.map(skill => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    isVisible={isBackendCardVisible}
                  />
                ))}
              </CardContent>
            </Card>
          </div>

          <div
            ref={frontendCardRef}
            className={`transition-all duration-700 ease-out ${
              isFrontendCardVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isFrontendCardVisible ? "0.1s" : "0s" }}
          >
            <Card className="bg-card/80 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center text-foreground">
                  <Code2 className="mr-3 h-7 w-7 text-primary" />
                  Frontend Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {frontendSkills.map(skill => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    isVisible={isFrontendCardVisible}
                  />
                ))}
              </CardContent>
            </Card>
          </div>

          <div
            ref={frameworkCardRef}
            className={`transition-all duration-700 ease-out ${
              isFrameworkCardVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isFrameworkCardVisible ? "0.1s" : "0s" }}
          >
            <Card className="bg-card/80 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center text-foreground">
                  <Package className="mr-3 h-7 w-7 text-primary" />
                  Frameworks & Libraries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {frameworkSkills.map(skill => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    isVisible={isFrameworkCardVisible}
                  />
                ))}
              </CardContent>
            </Card>
          </div>

          <div
            ref={techCardRef}
            className={`transition-all duration-700 ease-out ${
              isTechCardVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isTechCardVisible ? "0.1s" : "0s" }}
          >
            <Card className="bg-card/80 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center text-foreground">
                  <Computer className="mr-3 h-7 w-7 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {technicalSkills.map(skill => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    isVisible={isTechCardVisible}
                  />
                ))}
              </CardContent>
            </Card>
          </div>

          <div
            ref={aiCardRef}
            className={`transition-all duration-700 ease-out ${
              isAiCardVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isAiCardVisible ? "0.1s" : "0s" }}
          >
            <Card className="bg-card/80 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center text-foreground">
                  <Bot className="mr-3 h-7 w-7 text-primary" />
                  AI Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiSkills.map(skill => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    isVisible={isAiCardVisible}
                  />
                ))}
              </CardContent>
            </Card>
          </div>

          <div
            ref={softCardRef}
            className={`transition-all duration-700 ease-out ${
              isSoftCardVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isSoftCardVisible ? "0.15s" : "0s" }}
          >
            <Card className="bg-card/80 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center text-foreground">
                  <Lightbulb className="mr-3 h-7 w-7 text-primary" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {softSkills.map(skill => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    isVisible={isSoftCardVisible}
                  />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
