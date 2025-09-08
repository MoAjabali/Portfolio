"use client"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Cpu, BrainCircuit, Code2 } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const learningCourses = [
  {
    title: "Laravel Course",
    platform: "Tarmize Academy & Mohammed Taher",
    technologies: "Laravel, MVC, Eloquent ORM",
    descriptionEn:
      "Built full-stack applications using Laravel MVC architecture and Blade templating. Developed secure APIs with JWT authentication and custom CMS for content management.",
    icon: <BrainCircuit className="h-8 w-8 text-primary" />
  },
  {
    title: "Node.js Course",
    platform: "Tarmize Academy & FreeCodeCamp",
    technologies: "Node.js, Express.js, MongoDB, EJS",
    descriptionEn:
      "Built scalable server-side applications using Node.js and Express.js with RESTful API development. Integrated MongoDB and implemented user authentication systems using EJS templating.",
    icon: <Cpu className="h-8 w-8 text-primary" />
  },
  {
    title: "Elzero Web School - Back-End Development",
    platform: "Elzero Web School",
    technologies: "PHP, MySQL, MVC Pattern",
    descriptionEn:
      "Mastered core PHP programming including OOP principles, session/cookie management, and MySQL database design. Implemented MVC pattern by developing a fully functional book management system with CRUD operations.",
    icon: <Database className="h-8 w-8 text-primary" />
  },
  {
    title: "React Course",
    platform: "Tarmize Academy",
    technologies: "React.js, Material-UI",
    descriptionEn:
      "Developed dynamic UIs with React.js using component-based architecture. Achieved 30% faster rendering with React hooks and 100% responsive designs using Material-UI.",
    icon: <Code className="h-8 w-8 text-primary" />
  },
  {
    title: "Elzero Web School - Front-End Development",
    platform: "Elzero Web School",
    technologies: "HTML, CSS, JS, Git & Github, Pug.js, SCSS, Gulp.js.",
    descriptionEn:
      "Completed an intensive Front-End Development path covering HTML5, CSS3, and modern JavaScript (ES6+), along with Git/GitHub for version control and team collaboration. Enhanced workflow efficiency using Pug.js for templating, SCSS for advanced styling, and Gulp.js for task automation. Applied these skills by building four production-ready projects, including a landing page and a responsive dashboard.",
    icon: <Code2 className="h-8 w-8 text-primary" />
  }
]

export function SelfLearningSection() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  })
  const [headerRef, isHeaderVisible] = useScrollAnimation({
    threshold: 0.5,
    triggerOnce: true
  })

  return (
    <section
      ref={sectionRef}
      id="self-learning"
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <header
          ref={headerRef}
          className={`mb-12 text-center transition-all duration-700 ease-out ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">
            Self-learning & Online Training
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My true education journey
          </p>
        </header>

        <Tabs
          defaultValue="0"
          orientation="vertical"
          className="flex flex-col md:flex-row gap-4 md:gap-8"
        >
          <TabsList
            ref={sectionRef}
            className={`h-fit flex  md:flex-col flex-wrap pb-2 md:pb-0 gap-2 p-2 bg-background/50 transition-all duration-700 ease-out ${
              isSectionVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {learningCourses.map((course, index) => (
              <TabsTrigger
                key={index}
                value={index.toString()}
                className="data-[state=active]:bg-primary/10 justify-start gap-2 min-w-[200px] md:min-w-auto text-sm md:text-base px-3 py-2"
              >
                {React.cloneElement(course.icon, { className: "h-5 w-5" })}
                {course.platform}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-1">
            {learningCourses.map((course, index) => (
              <TabsContent
                key={index}
                value={index.toString()}
                className={`transition-all duration-700 ease-out ${
                  isSectionVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                // تأخير متدرج لكل عنصر
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <Card className="bg-card/80 shadow-xl mx-2 md:mx-0">
                  <CardHeader className="px-4 py-3 md:px-6 md:py-4">
                    <CardTitle className="text-xl md:text-2xl">
                      {course.title}
                    </CardTitle>
                    <div className="text-primary font-semibold">
                      {course.technologies}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div>
                        <h3 className="text-base font-semibold mb-2 border-l-4 border-primary pl-2">
                          Details
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {course.descriptionEn}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}
