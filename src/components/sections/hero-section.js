"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MoveDown } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useLanguage } from "@/context/LanguageContext"

const transition = {
  en: {
    title: "Welcome Among the Stars",
    simpleWords: "Dream Build Launch",
    body: `I'm Yemeni Full-Stack Architect Crafting Scalable Web Dreams, a
          passionate full-stack developer and creator, with a fast learning
          ability and deep enthusiasm for the latest advancement in technology.`,
    slagone: "Let's launch your dream among the stars.",
    myWork: "View My Work",
    touch: "Get In Touch",
  },
  ar: {
    title: "مرحبا بك بين النجوم",
    simpleWords: "احلم ابني اطلق",
    body: `
    مطور يمني لتطوير مواقع ويب متكاملة وقابلة للتوسعة, مبدع وشغوف في مجال الويب, مع امتلاك مهارت التعلم الذاتي وسرعة التعلم واهتمامي العميق بأحدث التقنيات المتواجدة في مجال, يمكنني من صنع تطبيقات تنافس العمالقة
    `,
    slagone: "Let's launch your dream among the stars.",
    myWork: "القي نظرة",
    touch: "القي السلام",
  },
}

export function HeroSection() {
  const { language, setLanguage } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const [h1Ref, isH1Visible] = useScrollAnimation({
    threshold: 0.5,
    triggerOnce: true
  })
  const [spanRef, isSpanVisible] = useScrollAnimation({
    threshold: 0.5,
    triggerOnce: true
  })
  const [p1Ref, isP1Visible] = useScrollAnimation({
    threshold: 0.5,
    triggerOnce: true
  })
  const [p2Ref, isP2Visible] = useScrollAnimation({
    threshold: 0.5,
    triggerOnce: true
  })
  const [buttonsRef, isButtonsVisible] = useScrollAnimation({
    threshold: 0.5,
    triggerOnce: true
  })
  const [scrollIconRef, isScrollIconVisible] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden py-20 md:py-32"
    >
      <div className="container mx-auto max-w-screen-md px-4 text-center">
        <h1
          ref={h1Ref}
          className={`font-headline text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl transition-all duration-700 ease-out ${
            isH1Visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isH1Visible ? "0.1s" : "0s" }}
        >
          {transition[language].title}
        </h1>
        <p
          ref={p1Ref}
          className={`text-lg text-muted-foreground max-w-xl mx-auto text-muted-foreground sm:text-xl md:text-2xl transition-all duration-700 ease-out ${
            isP1Visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isP1Visible ? "0.15s" : "0s" }}
        >
          {transition[language].simpleWords}
        </p>
        <p
          ref={p1Ref}
          className={`mt-6 max-w-xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl transition-all duration-700 ease-out ${
            isP1Visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isP1Visible ? "0.15s" : "0s" }}
        >
          {transition[language].body}
        </p>
        <p
          ref={p2Ref}
          className={`mt-4 max-w-xl mx-auto text-md text-primary sm:text-lg transition-all duration-700 ease-out ${
            isP2Visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isP2Visible ? "0.2s" : "0s" }}
        >
          {transition[language].slagone}
        </p>
        <div
          ref={buttonsRef}
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out ${
            isButtonsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isButtonsVisible ? "0.25s" : "0s" }}
        >
          <Button
            asChild
            size="lg"
            className="font-semibold shadow-lg hover:shadow-primary/50 transition-shadow duration-300"
          >
            <Link href="#projects">{transition[language].myWork}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground font-semibold shadow-lg hover:shadow-primary/50 transition-shadow duration-300"
          >
            <Link href="#contact">{transition[language].touch}</Link>
          </Button>
        </div>
      </div>
      <div
        ref={scrollIconRef}
        className={`absolute bottom-6 left-1/2 -ml-4 transition-opacity duration-700 ease-out ${
          isScrollIconVisible ? "opacity-100 animate-bounce" : "opacity-0"
        }`}
        style={{ transitionDelay: isScrollIconVisible ? "0.3s" : "0s" }}
      >
        <Link href="#about" aria-label="Scroll to About Me section">
          <MoveDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
        </Link>
      </div>
    </section>
  )
}
