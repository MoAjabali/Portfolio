"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cpu, Rocket, Wrench, Gauge, Bug } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export function ServicesSection() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  })
  const [headerRef, isHeaderVisible] = useScrollAnimation({
    threshold: 0.5,
    triggerOnce: true
  })

  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Building complete websites from scratch using Laravel and React. Perfect for startups and medium-sized projects.",
      icon: <Code className="h-8 w-8 text-primary" />
    },
    {
      title: "RESTful API Development",
      description:
        "Creating secure APIs with Laravel/Node.js including JWT authentication, documentation, and testing.",
      icon: <Cpu className="h-8 w-8 text-primary" />
    },
    {
      title: "Interactive Frontend Development",
      description:
        "Transforming designs into responsive interfaces with React, Next.js, and TailwindCSS.",
      icon: <Rocket className="h-8 w-8 text-primary" />
    },
    {
      title: "Performance Optimization",
      description:
        "Improving loading speed, boosting SEO, and enhancing user experience.",
      icon: <Gauge className="h-8 w-8 text-primary" />
    },
    {
      title: "Bug Fixing & Maintenance",
      description:
        "Providing technical support, updating code, and keeping systems running smoothly.",
      icon: <Bug className="h-8 w-8 text-primary" />
    },
    {
      title: "System Modernization",
      description:
        "Upgrading legacy systems with modern technologies and best practices.",
      icon: <Wrench className="h-8 w-8 text-primary" />
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="services"
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
        >
          <h2 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">
            What I Offer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive Web Solutions
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                isSectionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full bg-card/80 shadow-xl hover:shadow-primary/30 transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {service.icon}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
