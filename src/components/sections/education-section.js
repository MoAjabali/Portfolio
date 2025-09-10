"use client"
import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { GraduationCap, BookOpen, CalendarDays } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
// أضف استيراد سياق اللغة
import { useLanguage } from "@/context/LanguageContext"

// إضافة ترجمات للمكون
const translations = {
  en: {
    title: "My Academic Journey",
    subtitle: "Foundations of My Knowledge",
    educationHistory: [
      {
        institution: "National University",
        degree: "B.Sc. in Computer Science",
        period: "2023 - 2027",
        description:
          "Comprehensive program covering programming fundamentals, problem-solving techniques, data structures, and algorithms. Additional focus on system analysis and multiple programming languages including C++, Java, Assembly, and PL/SQL.",
        icon: <GraduationCap className="w-8 h-8 text-primary" />
      },
      {
        institution: "American French World Institute",
        degree: "TOEFL iBT",
        period: "2024 - 2025",
        description:
          "Intensive training focusing on all test sections: Reading, Listening, Speaking, and Writing. Included test-taking strategies and score-boosting techniques.",
        icon: <BookOpen className="w-8 h-8 text-primary" />
      },
      {
        institution: "Google developer",
        degree: "Course. python language",
        period: "2024 - 2025",
        description:
          "Practical-oriented course covering Python essentials: loops, conditional statements, OOP concepts, API integration, and real-world application development.",
        icon: <BookOpen className="w-8 h-8 text-primary" />
      },
      {
        institution: "American French World Institute",
        degree: "English Language Diploma - Advanced level",
        period: "2023 - 2024",
        description:
          "Advanced English program using American English File curriculum. Focused on vocabulary expansion, advanced grammar, and soft skills development including presentations and professional communication.",
        icon: <BookOpen className="w-8 h-8 text-primary" />
      }
    ]
  },
  ar: {
    title: "مساري الأكاديمي",
    subtitle: "رحلتي الأكاديمية",
    educationHistory: [
      {
        institution: "الجامعة الوطنية",
        degree: "بكالوريوس علوم الحاسوب",
        period: "2023 - 2027",
        description:
          "برنامج شامل يشمل أساسيات البرمجة، حل المشكلات، هياكل البيانات، والخوارزميات. مع تركيز إضافي على تحليل النظم ولغات برمجة متعددة تشمل C++، Java، Assembly، وPL/SQL.",
        icon: <GraduationCap className="w-8 h-8 text-primary" />
      },
      {
        institution: "المعهد الأمريكي الفرنسي العالمي",
        degree: "اختبار التوفل iBT",
        period: "2024 - 2025",
        description:
          "تدريب مكثف يركز على جميع أقسام الاختبار: القراءة والاستماع والتحدث والكتابة. يشمل استراتيجيات اجتياز الاختبار وتقنيات تعزيز الدرجات.",
        icon: <BookOpen className="w-8 h-8 text-primary" />
      },
      {
        institution: "مطور جوجل",
        degree: "دورة لغة بايثون",
        period: "2024 - 2025",
        description:
          "دورة عملية تغطي أساسيات بايثون: الحلقات والعبارات الشرطية ومفاهيم البرمجة الكائنية وتكامل واجهات برمجة التطبيقات وتطوير التطبيقات الواقعية.",
        icon: <BookOpen className="w-8 h-8 text-primary" />
      },
      {
        institution: "المعهد الأمريكي الفرنسي العالمي",
        degree: "دبلوم اللغة الإنجليزية - المستوى المتقدم",
        period: "2023 - 2024",
        description:
          "برنامج إنجليزي متقدم باستخدام منهج American English File. يركز على توسيع المفردات والقواعد المتقدمة وتطوير المهارات الناعمة بما في ذلك العروض التقديمية والتواصل المهني.",
        icon: <BookOpen className="w-8 h-8 text-primary" />
      }
    ]
  }
}

function EducationTimelineItem({ edu, index, language }) {
  const [itemRef, isVisible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <div
      ref={itemRef}
      className={`mb-12 relative flex items-start transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10" // Slide from left
      }`}
      // Stagger based on index
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="z-10 flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 border-2 rounded-full shadow-lg bg-background border-primary/60">
        {React.cloneElement(edu.icon, { className: "h-6 w-6 text-primary" })}
      </div>
      <div className={`${language === "en" ? "ml-6" : "mr-6"} flex-grow`}>
        <Card className="overflow-hidden shadow-xl bg-card/80">
          <CardHeader className="p-6">
            <div>
              <CardTitle className="text-2xl font-headline text-foreground">
                {edu.institution}
              </CardTitle>
              <CardDescription className="font-semibold text-primary">
                {edu.degree}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-3">
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className={`${language === "en" ? "mr-2" : "ml-2"} h-4 w-4`} />
              <span>{edu.period}</span>
            </div>
            <p className="text-muted-foreground">{edu.description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function EducationSection() {
  // استخدام سياق اللغة
  const { language } = useLanguage()
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
      id="education"
      dir={language === "en" ? "ltr" : "rtl"}
      className="py-16 md:py-24 bg-background"
    >
      <div className="container max-w-screen-lg px-4 mx-auto">
        <header
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-700 ease-out ${
            // Increased mb for timeline spacing
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isHeaderVisible ? "0.05s" : "0s" }}
        >
          <h2 className="text-4xl font-bold font-headline text-foreground sm:text-5xl">
            {translations[language].title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {translations[language].subtitle}
          </p>
        </header>
        <div className="relative">
          {/* Vertical timeline bar */}
          <div className={`absolute ${language=="en" ? "left-[1.5rem]":"right-[1.25rem]" } top-2 bottom-2 w-1 bg-primary/30 transform -translate-x-1/2 rounded-full`}></div>
          {translations[language].educationHistory.map((edu, index) => (
            <EducationTimelineItem key={index} edu={edu} index={index} language={language} />
          ))}
        </div>
      </div>
    </section>
  )
}
