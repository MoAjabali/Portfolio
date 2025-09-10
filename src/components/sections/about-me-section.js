"use client"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserRound, MapPin, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useLanguage } from "@/context/LanguageContext"

const translation ={
  en: {
    title: "About Me",
    titleDesc:"A Glimpse into My World",
    box1:{
      title: "Who I Am", 
      body1: `Hello! I'm Mohammed Al-Jabali, a dedicated and
        enthusiastic individual with a deep passion for web
        development. I thrive on challenges and continuously seek
        opportunities to learn and grow, both personally and
        professionally.`,
        body2: `My journey in web development is driven by a desire to
          create meaningful and impactful solutions. I believe that
          technology is the path for dreamer to reach beyond the sky.`
    },
    box2:{
      title: "Location", 
      body1: `Sana'a, Yemen`,
      body2: `Open to remote opportunities.`
    },
    box3:{
      title: "Interests", 
      body: `Technology, Graphic, Business`
    },
  },
  ar: {
    title: "من أنا",
    titleDesc: "نظرة خاطفة على عالمي",
    box1: {
      title: "من أكون",
      body1: `مرحبًا! أنا محمد الجبلي، مطوِّر ويب متكامل شغوف بالتعلم المستمر وتطوير حلولٍ رقميةٍ مؤثرة.`,
      body2: `أسعى دائمًا لتحويل الأفكار إلى واقعٍ رقمي يساهم في تحسين حياة المستخدمين.`
    },
    box2: {
      title: "الموقع",
      body1: "صنعاء، اليمن",
      body2: "متاح للعمل عن بُعد"
    },
    box3: {
      title: "الاهتمامات",
      body: "تكنولوجيا، تصميم جرافيك، أعمال"
    }
  }
}

export function AboutMeSection() {
  const { language } = useLanguage();
  const [sectionRef, isSectionVisible] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  })
  const [headerRef, isHeaderVisible] = useScrollAnimation({
    threshold: 0.5,
    triggerOnce: true
  })
  const [imageRef, isImageVisible] = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true
  })
  const [card1Ref, isCard1Visible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  })
  const [card2Ref, isCard2Visible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  })
  const [card3Ref, isCard3Visible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section
      dir={language=="en" ? "ltr" : "rtl"}
      ref={sectionRef}
      id="about"
      className="py-16 md:py-24 bg-background/80 backdrop-blur-sm"
    >
      <div className="container max-w-screen-lg px-4 mx-auto">
        <header
          ref={headerRef}
          className={`mb-12 text-center transition-all duration-700 ease-out ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isHeaderVisible ? "0.05s" : "0s" }}
        >
          <h2 className="text-4xl font-bold font-headline text-foreground sm:text-5xl">
            {translation[language].title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {translation[language].titleDesc}
          </p>
        </header>

        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-3">
          <div
            ref={imageRef}
            className={`md:col-span-1 flex justify-center transition-all duration-700 ease-out ${
              isImageVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isImageVisible ? "0.1s" : "0s" }}
          >
            <Image
              src="/profile.png"
              alt="My Profile Picture"
              width={300}
              height={300}
              className="object-cover border-4 rounded-full shadow-2xl border-primary/50"
              data-ai-hint="profile professional"
            />
          </div>

          <div className="space-y-6 md:col-span-2">
            <div
              ref={card1Ref}
              className={`transition-all duration-700 ease-out ${
                isCard1Visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isCard1Visible ? "0.15s" : "0s" }}
            >
              <Card className="shadow-xl bg-card/80 ">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-headline">
                    <UserRound className={`${language=="en" ? "mr-3" : "ml-3"} h-7 w-7 text-primary`} />
                    {translation[language].box1.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>
                    {translation[language].box1.body1}
                  </p>
                  <p>
                    {translation[language].box1.body2}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div
                ref={card2Ref}
                className={`transition-all duration-700 ease-out ${
                  isCard2Visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isCard2Visible ? "0.2s" : "0s" }}
              >
                <Card className="shadow-xl bg-card/80">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-headline">
                      <MapPin className={`${language=="en" ? "mr-3" : "ml-3"} w-6 h-6 text-primary`} />
                      {translation[language].box2.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>{translation[language].box2.body1}</p>
                    <p className="text-sm">{translation[language].box2.body2}</p>
                  </CardContent>
                </Card>
              </div>
              <div
                ref={card3Ref}
                className={`transition-all duration-700 ease-out ${
                  isCard3Visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isCard3Visible ? "0.25s" : "0s" }}
              >
                <Card className="shadow-xl bg-card/80">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-headline">
                      <Sparkles className={`${language=="en" ? "mr-3" : "ml-3"} w-6 h-6 text-primary`} />
                      {translation[language].box3.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>{translation[language].box3.body}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
