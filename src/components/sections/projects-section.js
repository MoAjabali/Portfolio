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
// أضف استيراد سياق اللغة
import { useLanguage } from "@/context/LanguageContext"

// إضافة ترجمات للمكون
const translations = {
  en: {
    title: "My Constellation of Projects",
    subtitle: "Creations That Shine",
    categories: [
      { id: "all", label: "All Projects" },
      { id: "frontend", label: "Frontend" },
      { id: "backend", label: "Backend" },
      { id: "full-stack", label: "Full Stack" },
      { id: "other", label: "Other" }
    ],
    exploreMore: "Explore More Projects",
    liveDemo: "Live Demo",
    code: "Code",
    projects: [
      {
        title: "Sader | Online Store",
        description: `
          A full-featured online store for organic products built with Next.js 14 and React, connected to a PHP Laravel API, offering complete product, orders, favorites, and user account management.
        `,
        videoUrl: "/sader.webm",
        tags: ["Laravel", "API", "MySql", "React", "Next.js"],
        // liveLink: "https://github.com/MoAjabali/php-simpleAPI-blog",
        repoLink: "https://github.com/MoAjabali/sader-frontend",
        category: "full-stack"
      },
      {
        title: "Hashtag It | Full-Stack Social Media App",
        description: `
          A mini-Twitter social media platform built with PHP (Advanced MVC), handling users, posts, interactions, and following, designed as a scalable foundation for a professional social media application.
        `,
        videoUrl: "/hashtagit.webm",
        tags: ["PHP", "Mysql", "MVC"],
        liveLink: "http://mini-twitter.fwh.is",
        repoLink: "https://github.com/MoAjabali/php-simpleAPI-blog",
        category: "full-stack"
      },
      {
        title: "Roud Map | Full-Stack App",
        description: `
          A roadmap-based educational platform built with a custom PHP MVC architecture, enabling structured specialization paths, skill breakdown, and user authentication.
        `,
        videoUrl: "/roud.webm",
        tags: ["PHP", "Mysql", "MVC", "Bootstrap 5"],
        // liveLink: "https://github.com/MoAjabali/php-simpleAPI-blog",
        repoLink: "https://github.com/MoAjabali/RoudMap",
        category: "full-stack"
      },
      {
        title: "My Simple Blog | Full-Stack Blogs management system",
        description: `
          A full-stack blogging platform powered by a custom PHP MVC API and a separate React client with JWT authentication and full content management.
        `,
        videoUrl: "/blog.webm",
        tags: ["PHP", "Mysql", "MVC", "RESTful APIs", "React", "Next.js"],
        // liveLink: "https://github.com/MoAjabali/php-simpleAPI-blog",
        repoLink: "https://github.com/MoAjabali/react-simpleApi-blog",
        category: "full-stack"
      },
      {
        title: "TK plus | Full-Stack Events management system",
        description: `
          A full-stack web application for event management, including interactive user pages and an admin dashboard, with full control over events, tickets, and users.
        `,
        videoUrl: "/tkplus.webm",
        tags: ["Node.js & Express.js", "Mysql", "HTML", "CSS", "JS"],
        liveLink: "https://moajabali.github.io/tkplus-frontend/",
        repoLink: "https://github.com/MoAjabali/tkplus-frontend",
        category: "full-stack"
      },
      {
        title: "wather App | React Weather App",
        description: `
          A responsive weather web application built with React.js, featuring real-time API integration and full bilingual (Arabic/English) support with dynamic RTL/LTR switching.
        `,
        videoUrl: "/wather-app.webm",
        tags: ["React.js", "Tailwind CSS", "Vite", "Axios", "i18next"],
        liveLink: "https://react-simple-weatherapp.vercel.app/",
        repoLink: "https://github.com/MoAjabali/react-simple-weatherapp",
        category: "frontend"
      },
      {
        title: "Articles Nodejs | Full-Stack Application",
        description: `
          A full-stack article management web app build with node.js, express.js, and MongoDB. Users can create, read, updated, and delete articles.
        `,
        videoUrl: "/nodejs-article.webm",
        tags: ["Node.js & Express.js", "MongoDB", "EJS", "Bootstrap"],
        liveLink: "https://articles-nodejs-8akj.onrender.com/",
        repoLink: "https://github.com/MoAjabali/articles-nodejs",
        category: "full-stack"
      },
      {
        title: "React todo list | React Application",
        description: `
          A simple web app built with React.js for managing daily tasks.  
          Users can create, view, edit, and delete tasks through a clean and responsive Bootstrap-powered interface.
        `,
        videoUrl: "/react-todolist-ar.webm",
        tags: ["React.Js", "MUI"],
        liveLink: "https://react-todolist-ar.vercel.app/",
        repoLink: "https://github.com/MoAjabali/react-todolist-ar",
        category: "frontend"
      },
      {
        title: "Elzero | Dashboard",
        description: `
          Elzero Template Four is a fully responsive, modern website template built with pure HTML and CSS. Features a clean design with smooth animations, organized sections, and cross-browser compatibility - perfect for business or portfolio websites.
        `,
        videoUrl: "/elzero-template-4.webm",
        tags: ["Pug.js", "SCSS", "Dashboard"],
        liveLink: "https://moajabali.github.io/Elzero-Template-Four/dist/dashboard.html",
        repoLink: "https://github.com/MoAjabali/Elzero-Template-Four",
        category: "frontend"
      },
      {
        title: "Book Club | Full-Stack Application",
        description: `
          A full-stack digital library web app built with PHP and MySQL.  
          Users can create, view, update, and delete books, upload files, and search for books through a clean Bootstrap-powered interface.
        `,
        videoUrl: "/book-club.webm",
        tags: ["PHP", "Authentications", "bootstrap"],
        // liveLink: "https://moajabali.github.io/Elzero-Template-Four/dist/dashboard.html",
        repoLink: "https://github.com/MoAjabali/Book-Club",
        category: "full-stack"
      },
      {
        title: "Real Estate Management System",
        description: `
          A full-stack real estate management web app built with Laravel and MySQL.
          Users can create, view, update, and delete property listings through a clean Blade-powered interface.
        `,
        videoUrl: "/laravelProperty.webm",
        tags: ["Laravel", "Mysql", "blade", "Bootstrap"],
        // liveLink: "https://articles-nodejs-8akj.onrender.com/",
        repoLink: "https://github.com/MoAjabali/laravelProperty",
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
  },
  ar: {
    title: "مشاريعي",
    subtitle: "إبداعاتي",
    categories: [
      { id: "all", label: "جميع المشاريع" },
      { id: "frontend", label: "واجهة أمامية" },
      { id: "backend", label: "خلفية" },
      { id: "full-stack", label: "تطوير متكامل" },
      { id: "other", label: "أخرى" }
    ],
    exploreMore: "استكشاف المزيد من المشاريع",
    liveDemo: "عرض حي",
    code: "الكود",
    projects: [
      {
        title: "سدر | متجر إلكتروني",
        description: `
          متجر إلكتروني كامل للمنتجات العضوية مبني بـ Next.js 14 وReact، مع Backend API باستخدام PHP Laravel، يتيح إدارة المنتجات، الطلبات، المفضلة، والحسابات الشخصية بشكل متكامل.
        `,
        videoUrl: "/sader.webm",
        tags: ["Laravel", "API", "MySql", "React", "Next.js"],
        // liveLink: "https://github.com/MoAjabali/php-simpleAPI-blog",
        repoLink: "https://github.com/MoAjabali/sader-frontend",
        category: "full-stack"
      },
      {
        title: "Hashtag It | منصة تواصل اجتماعي",
        description: `
          منصة تواصل اجتماعي مشابهة لتويتر، مبنية بـ PHP (Advanced MVC) مع إدارة المستخدمين، المنشورات، التفاعلات، والمتابعة، مصممة لتكون قاعدة قوية وقابلة للتوسع لأي منصة اجتماعية.
        `,
        videoUrl: "/hashtagit.webm",
        tags: ["PHP", "Mysql", "MVC"],
        liveLink: "http://mini-twitter.fwh.is",
        repoLink: "https://github.com/MoAjabali/php-simpleAPI-blog",
        category: "full-stack"
      },
      {
        title: "خرائط التعلم",
        description: `
          منصة تعليمية لإدارة المسارات التقنية مبنية بهندسة MVC باستخدام PHP، تتيح عرض التخصصات، تفكيك المهارات، وربطها بمصادر تعليمية مع دعم تسجيل المستخدمين.
        `,
        videoUrl: "/roud.webm",
        tags: ["PHP", "Mysql", "MVC", "Bootstrap 5"],
        // liveLink: "https://github.com/MoAjabali/php-simpleAPI-blog",
        repoLink: "https://github.com/MoAjabali/RoudMap",
        category: "full-stack"
      },
      {
        title: "مدونتي البسيطة | تطبيق ويب لإدارة المدونات",
        description: `
          منصة تدوين متكاملة تعتمد على API مبنية بـ PHP وفق نمط MVC، مع واجهة React مستقلة تدعم JWT Authentication وإدارة كاملة للمحتوى.
        `,
        videoUrl: "/blog.webm",
        tags: ["PHP", "Mysql", "MVC", "RESTful APIs", "React", "Next.js"],
        // liveLink: "https://github.com/MoAjabali/php-simpleAPI-blog",
        repoLink: "https://github.com/MoAjabali/react-simpleApi-blog",
        category: "full-stack"
      },
      {
        title: "تذكر+ | لإدارة الفعاليات",
        description: `
          تطبيق ويب كامل لإدارة الفعاليات، يشمل واجهة مستخدم تفاعلية ولوحة تحكم للإدارة، مع إدارة الفعاليات والتذاكر والمستخدمين.  
        `,
        videoUrl: "/tkplus.webm",
        tags: ["Node.js & Express.js", "Mysql", "HTML", "CSS", "JS"],
        liveLink: "https://moajabali.github.io/tkplus-frontend/",
        repoLink: "https://github.com/MoAjabali/tkplus-frontend",
        category: "full-stack"
      },
      {
        title: "المناخ | برنامج React للطقس",
        description: `
        تطبيق ويب تفاعلي لعرض بيانات الطقس مبني بـ React.js، يدعم العربية والإنجليزية مع تبديل RTL/LTR ديناميكياً، ويعتمد على API حقيقي لجلب البيانات اللحظية.
        `,
        videoUrl: "/wather-app.webm",
        tags: ["React.js", "Tailwind CSS", "Vite", "Axios", "i18next"],
        liveLink: "https://react-simple-weatherapp.vercel.app/",
        repoLink: "https://github.com/MoAjabali/react-simple-weatherapp",
        category: "frontend"
      },
      {
        title: "مقالات Node.js | تطبيق متكامل",
        description: `
          تطبيق ويب لإدارة المقالات مبني بـ node.js و express.js و MongoDB. يمكن للمستخدمين إنشاء وقراءة وتحديث وحذف المقالات.
        `,
        videoUrl: "/nodejs-article.webm",
        tags: ["Node.js & Express.js", "MongoDB", "EJS", "Bootstrap"],
        liveLink: "https://articles-nodejs-8akj.onrender.com/",
        repoLink: "https://github.com/MoAjabali/articles-nodejs",
        category: "full-stack"
      },
      {
        title: "مهامي | تطبيق todo list",
        description: `
          A simple web app built with React.js for managing daily tasks.  
          Users can create, view, edit, and delete tasks through a clean and responsive Bootstrap-powered interface.
        `,
        videoUrl: "/react-todolist-ar.webm",
        tags: ["React.Js", "MUI"],
        liveLink: "https://react-todolist-ar.vercel.app/",
        repoLink: "https://github.com/MoAjabali/react-todolist-ar",
        category: "frontend"
      },
      {
        title: "الزيرو | لوحة تحكم",
        description: `
          قالب الزيرو الرابع هو نموذج موقع ويب حديث سريع الاستجابة بالكامل، مبني باستخدام HTML وCSS النقيين. يتميز بتصميم أنيق مع تأثيرات حركية سلسة، وأقسام منظمة، وتوافق مع مختلف المتصفحات - مثالي لمواقع الأعمال أو portfolios.
        `,
        videoUrl: "/elzero-template-4.webm",
        tags: ["Pug.js", "SCSS", "Dashboard"],
        liveLink: "https://moajabali.github.io/Elzero-Template-Four/dist/dashboard.html",
        repoLink: "https://github.com/MoAjabali/Elzero-Template-Four",
        category: "frontend"
      },
      {
        title: "Book Club",
        description: `
          تطبيق ويب لإدارة مكتبة رقمية مبني بـ PHP وMySQL. يمكن للمستخدمين إضافة، عرض، تعديل، وحذف الكتب بسهولة، مع رفع الملفات والبحث عن الكتب، عبر واجهة Bootstrap أنيقة.
        `,
        videoUrl: "/book-club.webm",
        tags: ["PHP", "Authentications", "bootstrap"],
        // liveLink: "https://moajabali.github.io/Elzero-Template-Four/dist/dashboard.html",
        repoLink: "https://github.com/MoAjabali/Book-Club",
        category: "full-stack"
      },
      {
        title: "نظام إدارة عقارات",
        description: `
          تطبيق ويب بسيط لإدارة العقارات مبني بإطار Laravel و MySQL. يمكن للمستخدمين إضافة، عرض، تعديل، وحذف العقارات بسهولة عبر واجهة Blade أنيقة.
        `,
        videoUrl: "/laravelProperty.webm",
        tags: ["Laravel", "Mysql", "blade", "Bootstrap"],
        // liveLink: "https://articles-nodejs-8akj.onrender.com/",
        repoLink: "https://github.com/MoAjabali/laravelProperty",
        category: "full-stack"
      },
      {
        title: "الزيرو | موقع متعدد الأقسام",
        description: `
          قالب ويب أنيق وتفاعلي مبني بـ HTML و CSS والرسوم المتحركة (مع قليل من JS). يتميز بشريط تنقل علوي وقسم رئيسي والمزيد. تصميم متجاوب لعرض ممتاز على مختلف الأجهزة.
        `,
        videoUrl: "/elzero-template3.webm",
        tags: ["HTML", "CSS", "JS", "رسوم متحركة"],
        liveLink: "https://MoAjabali.github.io/Elzero.elzero-template-three/",
        repoLink: "https://github.com/MoAjabali/Elzero.elzero-template-three",
        category: "frontend"
      },
      {
        title: "كاسبر | صفحة هبوط",
        description: `
          موقع هبوط أنيق وحديث من صفحة واحدة يضم أقسامًا مثل الرئيسية والخدمات والمحفظة والمزيد. مثالي للوكالات لعرض أعمالهم بشكل احترافي.
        `,
        videoUrl: "/elzero-template2.webm",
        tags: ["HTML", "CSS", "صفحة هبوط", "متجاوب"],
        liveLink: "https://MoAjabali.github.io/Kasper.elzero-template/",
        repoLink: "https://github.com/MoAjabali/Kasper.elzero-template",
        category: "frontend"
      },
      {
        title: "تطبيق الآلة الحاسبة | تحدي Frontend Mentor",
        description: `
          آلة حاسبة ويب أنيقة وسهلة الاستخدام. تم إنشاء التطبيق كجزء من تحدي Frontend Mentor. يتضمن مبدل سمات وتم بناؤه باستخدام HTML و CSS و JS.
        `,
        videoUrl: "/calc.webm",
        tags: ["HTML", "CSS", "JS", "مبدل السمات"],
        liveLink: "https://MoAjabali.github.io/Calc-FrontendMentore-challenge/",
        repoLink: "https://github.com/MoAjabali/Calc-FrontendMentore-challenge",
        category: "frontend"
      },
      {
        title: "حاسبة العمر (ساعة الحياة) | تحدي Frontend Mentor",
        description: `
          حاسبة عمر نظيفة وتفاعلية مبنية باستخدام HTML و CSS و JS. يمكن للمستخدمين إدخال تاريخ ميلادهم، ويحسب التطبيق عمرهم بالضبط بالسنوات والشهور والأيام.
        `,
        videoUrl: "/age-calc.webm",
        tags: ["HTML & CSS", "JS", "التحقق من النموذج", "زيادة متحركة"],
        liveLink: "https://MoAjabali.github.io/Kasper.elzero-template/",
        repoLink: "https://github.com/MoAjabali/Kasper.elzero-template",
        category: "frontend"
      },
      {
        title: "ليون | صفحة هبوط",
        description: `
        هذه صفحة هبوط تتميز بتصميم نظيف وبسيط وحديث. تحتوي على شريط تنقل مع قائمة منسدلة للتنقل بين الأقسام مثل الخدمات والمحفظة ومن نحن.
        `,
        videoUrl: "/elzero-template1.webm",
        tags: ["HTML", "CSS", "صفحة هبوط", "متجاوب"],
        liveLink: "https://MoAjabali.github.io/Leon.elzero-template/",
        repoLink: "https://github.com/MoAjabali/Leon.elzero-template",
        category: "frontend"
      }
    ]
  }
}

function ProjectCard({ project, index, language }) {
  const [cardRef, isVisible] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-out transform ${isVisible
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-10 scale-95"
        }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <Card className="flex flex-col h-full overflow-hidden shadow-xl bg-card/80 hover:shadow-primary/30">
        <CardHeader className="p-0">
          <video
            src={project.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-auto transition-transform duration-300 rounded-lg hover:scale-105"
          >
            <Video className="w-5 h-5 text-primary/70" />
            {project.title} video
          </video>
        </CardHeader>
        <CardContent className="flex-grow p-6">
          <CardTitle className="mb-2 text-2xl font-headline text-foreground">
            {project.title}
          </CardTitle>
          <div className="flex flex-wrap gap-2 mb-3">
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
        <CardFooter className="flex items-center justify-between p-6 mt-auto border-t border-border/50">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-primary hover:text-primary-foreground"
            >
              {
                project.liveLink && <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ExternalLink className={`${language === "en" ? "mr-1.5" : "ml-1.5"} h-4 w-4`} /> {translations[language].liveDemo}
                </Link>
              }

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
                <Github className={`${language === "en" ? "mr-1.5" : "ml-1.5"} h-4 w-4`} /> {translations[language].code}
              </Link>
            </Button>
          </div>
          <img src="/logo.svg" className="w-5 h-5 text-primary/70" />
        </CardFooter>
      </Card>
    </div>
  )
}

export function ProjectsSection() {
  // استخدام سياق اللغة
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")
  const [sectionRef, isSectionVisible] = useScrollAnimation({
    threshold: 0.05,
    triggerOnce: true
  })
  const [headerRef, isHeaderVisible] = useScrollAnimation({
    threshold: 0.5,
    triggerOnce: true
  })

  const filteredProjects = translations[language].projects
    .filter(
      project => activeCategory === "all" || project.category === activeCategory
    )
    .slice(0, 6) // Limit to 6 projects

  return (
    <section
      ref={sectionRef}
      id="projects"
      dir={language === "en" ? "ltr" : "rtl"}
      className="py-16 md:py-24 bg-background"
    >
      <div className="container max-w-screen-xl px-4 mx-auto">
        <header
          ref={headerRef}
          className={`mb-12 text-center transition-all duration-700 ease-out ${isHeaderVisible
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

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {translations[language].categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`transition-all duration-300 ${activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10"
                  }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} language={language} />
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
              <Rocket className={`${language === "en" ? "mr-2" : "ml-2"} h-5 w-5`} />
              {translations[language].exploreMore}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
