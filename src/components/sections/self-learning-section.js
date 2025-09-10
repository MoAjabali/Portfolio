"use client"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Cpu, BrainCircuit, Code2 } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useLanguage } from "@/context/LanguageContext"

const translations = {
  en: {
    sectionTitle: "Self-learning & Online Training",
    sectionSubtitle: "My true education journey",
    details: "Details",
    courses: [
      {
        title: "Laravel Course",
        platform: "Tarmize Academy & Mohammed Taher",
        description: "Created full-stack web applications using Laravel's MVC architecture, Blade templating engine, and Eloquent ORM for seamless database operations. Developed secure API endpoints with JWT authentication and built a custom CMS for blog content management."
      },
      {
        title: "Node.js Course",
        platform: "Tarmize Academy & FreeCodeCamp",
        description: "Built scalable server-side applications using Node.js and Express.js, focusing on RESTful API development. Integrated MongoDB for NoSQL database management and implemented user authentication systems. Utilized EJS for server-side templating while adhering to MVC design principles"
      },
      {
        title: "Elzero Web School - Back-End Development",
        platform: "Elzero Web School",
        description: "Mastered core PHP programming, including object-oriented principles (OOP), session/cookie management, and MySQL database design. Implemented the MVC architectural pattern by developing a fully functional book management system with complete CRUD (Create, Read, Update, Delete) operations."
      },
      {
        title: "React Course",
        platform: "Tarmize Academy",
        description: "Developed dynamic user interfaces with React.js, leveraging component-based architecture for reusable and maintainable code. Styled applications using Material-UI (MUI) framework, achieving 30% faster rendering performance with React hooks and ensuring 100% responsive design across all components."
      },
      {
        title: "Elzero Web School - Front-End Development",
        platform: "Elzero Web School",
        description: "Completed an intensive Front-End Development path covering HTML5, CSS3, and modern JavaScript (ES6+), along with Git/GitHub for version control and team collaboration. Enhanced workflow efficiency using Pug.js for templating, SCSS for advanced styling, and Gulp.js for task automation. Applied these skills by building four production-ready projects, including a landing page and a responsive dashboard."
      }
    ]
  },
  ar: {
    sectionTitle: "التعلّم الذاتي والدورات عبر الإنترنت",
    sectionSubtitle: "رحلتي التعليمية الحقيقية",
    details: "التفاصيل",
    courses: [
      {
        title: "دورة لارافيل",
        platform: "أكاديمية ترميز & محمد طاهر",
        description: "أنشأت تطبيقات ويب كاملة باستخدام إطار عمل Laravel وهيكلية MVC، مع استخدام محرك Blade للقوالب وEloquent ORM للتعامل مع قواعد البيانات. طورت نقاط نهاية API آمنة باستخدام مصادقة JWT، وقمت ببناء نظام إدارة محتوى (CMS) مخصص للعقارات.."
      },
      {
        title: "دورة Node.js",
        platform: "أكاديمية ترميز & FreeCodeCamp",
        description: "صممت تطبيقات تعمل بجهة الخادم باستخدام Node.js وExpress.js، مع التركيز على تطوير واجهات برمجية (RESTful APIs). قمت بدمج MongoDB لإدارة قواعد البيانات NoSQL وتنفيذ أنظمة مصادقة المستخدمين. استخدمت محرك EJS للقوالب من جانب الخادم مع الالتزام بمبادئ تصميم MVC."
      },
      {
        title: "Elzero Web School - تطوير الـBackend",
        platform: "Elzero Web School",
        description: "أتقنت أساسيات البرمجة بلغة PHP، بما في ذلك البرمجة كائنية التوجه (OOP) وإدارة الجلسات والكوكيز، بالإضافة إلى تصميم قواعد بيانات MySQL. نفذت نمط MVC من خلال تطوير نظام متكامل لإدارة الكتب الإلكترونية يدعم جميع عمليات CRUD (إنشاء، قراءة، تحديث، حذف)."
      },
      {
        title: "دورة React",
        platform: "أكاديمية ترميز",
        description: "طورت واجهات مستخدم ديناميكية باستخدام React.js، مستفيدًا من المكونات القابلة لإعادة الاستخدام. صممت التطبيقات بإطار عمل Material-UI (MUI)، وحققت تحسنًا بنسبة 30% في سرعة التحميل باستخدام React hooks، مع ضمان تصميم متجاوب بالكامل لجميع العناصر."
      },
      {
        title: "Elzero Web School - تطوير الـFrontend",
        platform: "Elzero Web School",
        description: "أكملت مسارًا مكثفًا في تطوير الواجهات الأمامية يشمل HTML5 وCSS3 وجافاسكريبت (ES6+)، بالإضافة إلى إدارة المشاريع باستخدام Git/GitHub للعمل الجماعي. استخدمت أدوات متقدمة مثل Pug.js لتنظيم القوالب، وSCSS للتصميم المتقدم، وGulp.js لأتمتة المهام. طبقت هذه المهارات في بناء أربعة مشاريع جاهزة للنشر، منها صفحة هبوط ولوحة تحكم إدارية متجاوبة."
      }
    ]
  }
}

const courseIcons = {
  0: <BrainCircuit className="flex-shrink-0 w-5 h-5 text-primary" />,
  1: <Cpu className="flex-shrink-0 w-5 h-5 text-primary" />,
  2: <Database className="flex-shrink-0 w-5 h-5 text-primary" />,
  3: <Code className="flex-shrink-0 w-5 h-5 text-primary" />,
  4: <Code2 className="flex-shrink-0 w-5 h-5 text-primary" />
}

export function SelfLearningSection() {
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
      id="self-learning"
      dir={language === "ar" ? "rtl" : "ltr"}
      className="py-16 md:py-24 bg-background"
    >
      <div className="container px-4 mx-auto md:px-8 lg:px-16">
        <header
          ref={headerRef}
          className={`mb-12 text-center transition-all duration-700 ease-out ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold font-headline text-foreground sm:text-5xl">
            {translations[language].sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {translations[language].sectionSubtitle}
          </p>
        </header>

        <Tabs
          defaultValue="0"
          orientation="vertical"
          className="flex flex-col gap-4 md:flex-row md:gap-8"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <TabsList
            ref={sectionRef}
            className={`h-fit flex md:flex-col flex-wrap pb-2 md:pb-0 gap-2 p-2 bg-background/50 transition-all duration-700 ease-out ${
              isSectionVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {translations[language].courses.map((course, index) => (
              <TabsTrigger
                key={index}
                value={index.toString()}
                className={`data-[state=active]:bg-primary/10 justify-start gap-2 min-w-[200px] md:min-w-auto text-sm md:text-base px-3 py-2 ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {courseIcons[index]}
                <span className="truncate">{course.platform}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-1">
            {translations[language].courses.map((course, index) => (
              <TabsContent
                key={index}
                value={index.toString()}
                className={`transition-all duration-700 ease-out ${
                  isSectionVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <Card className="mx-2 shadow-xl bg-card/80 md:mx-0">
                  <CardHeader className="px-4 py-3 md:px-6 md:py-4">
                    <CardTitle className="text-xl md:text-2xl">
                      {course.title}
                    </CardTitle>
                    <div className="font-semibold text-primary">
                      {course.technologies}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div>
                        <h3 className={`text-base font-semibold mb-2 border-primary pl-2 ${
                          language === "ar" ? "border-r-4 pr-2 text-right" : "text-left border-l-4"
                        }`}>
                          {translations[language].details}
                        </h3>
                        <p className={`text-muted-foreground leading-relaxed ${
                          language === "ar" ? "text-right" : "text-left"
                        }`}>
                          {course.description}
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
