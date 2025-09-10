import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Languages, Menu } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"


const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
]
const translations = {
  en: {
    navItems: [
      { name: "About", href: "#about" },
      { name: "Education", href: "#education" },
      { name: "Self Learning", href: "#self-learning" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" }
    ],
    logo: "Mohammed Al-Jabali",
  },
  ar: {
    navItems: [
      { name: "من أنا", href: "#about" },
      { name: "مساري الأكاديمي", href: "#education" },
      { name: "التعلم الذاتي", href: "#self-learning" },
      { name: "مهاراتي", href: "#skills" },
      { name: "مشاريعي", href: "#projects" },
      { name: "خدماتي", href: "#services" },
      { name: "تواصل بي", href: "#contact" }
    ],
    logo: "محمد الجبلي",
  },
}


export function Header() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <header
      dir={language=="en" ? "ltr" : "rtl"}
      className="sticky top-0 z-50 w-full border-b  border-border/20 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 animate-fade-in"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center space-x-2 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
          aria-label="Stardust Portfolio Home"
        >
          <img src="/logo.svg" className="h-7 w-7 text-primary" alt="logo" />
          <span className="hidden text-lg min-[400px]:text-2xl font-bold  min-[360px]:flex font-headline text-foreground">
            {translations[language].logo}
          </span>
          <span className="min-[360px]:hidden text-lg font-bold  font-headline text-foreground">
            {language=="en" ? "MoAjablai" : translations[language].logo}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="items-center justify-center hidden space-x-1 md:flex">
          <div className="flex items-center space-x-1">
            {translations[language].navItems.slice(0,3).map(item => (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className="text-foreground hover:bg-primary hover:text-primary-foreground "
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
            <DropdownMenu dir={language=="en" ? "ltr" : "rtl"}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className=" hover:bg-primary hover:text-primary-foreground"
                size="icon"
              >
                <Menu className="w-5 h-5 " />
                {/* Additional Links */}
                <span className="sr-only ">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={Languages=="en" ? "end" : "start"} className={`w-48 text-sm `}>
              {translations[language].navItems.slice(3).map(item => (
                <DropdownMenuItem
                  className="hover:bg-primary hover:text-primary-foreground focus:text-primary-foreground focus:bg-primary w-full px-2 py-1.5 text-sm"
                  key={item.name}
                  asChild
                >
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          <Button
            size="sm"
            className={`font-semibold transition-shadow duration-300 shadow-lg ${language=="en" ? "ml-0.5": "mr-0.5"}` }
            onClick = {()=>{
              setLanguage(language=="en" ? "ar" : "en");
            }}
          >
            {language=="en" ? "ع" : "EN"}
          </Button>
        </nav>
        {/* Mobile Navigation */}
        <div className="flex items-center justify-center md:hidden">
          <DropdownMenu dir={language=="en" ? "ltr" : "rtl"}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="hover:bg-primary hover:text-primary-foreground"
                size="icon"
              >
                <Menu className="w-5 h-5 " />
                <span className="sr-only ">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={Languages=="en" ? "end" : "start"} className={`w-48 text-sm `}>
              {translations[language].navItems.map(item => (
                <DropdownMenuItem
                  className="hover:bg-primary hover:text-primary-foreground focus:text-primary-foreground focus:bg-primary w-full px-2 py-1.5 text-sm"
                  key={item.name}
                  asChild
                >
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            size="sm"
            className={`font-semibold transition-shadow duration-300 shadow-lg ${language=="en" ? "ml-0.5": "mr-0.5"}`}
            onClick = {()=>{
              setLanguage(language=="en" ? "ar" : "en");
            }}
          >
            {language=="en" ? "ع" : "EN"}
          </Button>
        </div>
      </div>
    </header>
  )
}
