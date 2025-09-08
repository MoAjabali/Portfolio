"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Rocket, Video } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import React from "react"
import { useState } from "react"

const projects = [
  {
    title: "Articles Nodejs | Full-Stack Application",
    description: `
      A dull-stack article management web app build with node.js, express.js, and MongoDB. Users can create, read, updated, and delete articles.
    `,
    videoUrl: "/nodejs-article.webm",
    tags: ["Node.js & Express.js", "MongoDB", "EJS", "Bootstrap"],
    liveLink: "https://articles-nodejs-8akj.onrender.com/",
    repoLink: "https://github.com/MoAjabali/articles-nodejs",
    category: "full-stack"
  },
  {
    title: "Elzero | Multi section website",
    description: `
      A sleek, interactive web template build with HTML, CSS, And Animation (plus light JS). Featuring a top navigation bar, a Hero section, abd more. design responsively for excellent cross-device display. 
    `,
    videoUrl: "/elzero-template3.webm",
    tags: ["HTML", "CSS", "JS", "Animation"],
    liveLink: "https://MoAjabali.github.io/Elzero.elzero-template-three/",
    repoLink: "https://github.com/MoAjabali/Elzero.elzero-template-three",
    category: "frontend"
  },
  {
    title: "Kasper | landing page",
    description: `
      A sleek and modern one-page landing website featuring section like hero, Services, Portfolio, and more. Ideal for agencies to showcase their work professionally  
    `,
    videoUrl: "/elzero-template2.webm",
    tags: ["HTML", "CSS", "Landing page", "responsive"],
    liveLink: "https://MoAjabali.github.io/Kasper.elzero-template/",
    repoLink: "https://github.com/MoAjabali/Kasper.elzero-template",
    category: "frontend"
  },
  {
    title: "Calculator app | Frontend Mentor challenge",
    description: `
      A stylish and user-friendly calculator web. The app created as part for Frontend Mentor Challenge. It Includes a theme switcher and build using HTMl, CSS, and JS.
    `,
    videoUrl: "/calc.webm",
    tags: ["HTML", "CSS", "JS", "Theme switcher"],
    liveLink: "https://MoAjabali.github.io/Calc-FrontendMentore-challenge/",
    repoLink: "https://github.com/MoAjabali/Calc-FrontendMentore-challenge",
    category: "frontend"
  },
  {
    title: "Age calc (LifeClock) | Frontend Mentor challenge",
    description: `
      A clean and interactive age calculator build using HTML, CSS, and JS. Users can input their birth date, and the app calc their exact age in years, moths, and days.
    `,
    videoUrl: "/age-calc.webm",
    tags: ["HTML & CSS", "JS", "Form validation", "Animated increment"],
    liveLink: "https://MoAjabali.github.io/Kasper.elzero-template/",
    repoLink: "https://github.com/MoAjabali/Kasper.elzero-template",
    category: "frontend"
  },
  {
    title: "Leon | landing page",
    description: `
    This is a landing page feature a clean minimal, and modern design. It have a navigation bar with drop down menu, to go between sections like Services, Portfolio, and About.
    `,
    videoUrl: "/elzero-template1.webm",
    tags: ["HTML", "CSS", "Landing page", "responsive"],
    liveLink: "https://MoAjabali.github.io/Leon.elzero-template/",
    repoLink: "https://github.com/MoAjabali/Leon.elzero-template",
    category: "frontend"
  }
]

function ProjectCard({ project, index }) {
  const [cardRef, isVisible] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <Card className="bg-card/80 shadow-xl flex flex-col overflow-hidden h-full hover:shadow-primary/30">
        <CardHeader className="p-0">
          {/*<Image}
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
            data-ai-hint={project.imageHint}
          />*/}
          <video
            src={project.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg transition-transform hover:scale-105 duration-300 object-cover"
          >
            <Video className="h-5 w-5 text-primary/70" />
            {project.title} video
          </video>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="font-headline text-2xl text-foreground mb-2">
            {project.title}
          </CardTitle>
          <div className="mb-3  flex gap-2 flex-wrap">
            {project.tags.map(tag => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-primary/20 text-primary border-primary/50"

              >
                {tag}
              </Badge>
            ))}
          </div>
          <CardDescription className="text-muted-foreground line-clamp-3">
            {project.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-6 border-t border-border/50 flex justify-between items-center mt-auto">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="mr-1.5 h-4 w-4" /> Live Demo
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <Link
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code of ${project.title} on GitHub`}
              >
                <Github className="mr-1.5 h-4 w-4" /> Code
              </Link>
            </Button>
          </div>
          <img src="/logo.svg" className="h-5 w-5 text-primary/70" />
        </CardFooter>
      </Card>
    </div>
  )
}

const categories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "full-stack", label: "Full Stack" },
  { id: "other", label: "Other" }
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [sectionRef, isSectionVisible] = useScrollAnimation({
    threshold: 0.05,
    triggerOnce: true
  })
  const [headerRef, isHeaderVisible] = useScrollAnimation({
    threshold: 0.5,
    triggerOnce: true
  })

  const filteredProjects = projects
    .filter(
      project => activeCategory === "all" || project.category === activeCategory
    )
    .slice(0, 6) // Limit to 6 projects

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto max-w-screen-xl px-4">
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
            My Constellation of Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Creations That Shine
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary/10"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-semibold hover:bg-primary hover:text-primary-foreground"
          >
            <Link
              href="https://github.com/MoAjabali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Explore More Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
