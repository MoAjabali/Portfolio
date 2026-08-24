"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/toast"
import {
  Mail,
  Send,
  Linkedin,
  Github,
  Phone,
  User,
  MessageSquare,
  Twitter,
  Facebook
} from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useLanguage } from "@/context/LanguageContext"

import emailjs from "@emailjs/browser"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
})

const translations = {
  en: {
    title: "Connect With Me",
    subtitle: "Let's Talk About Stars, Code, or Anything In Between",
    sendMessage: "Send a Message",
    fullName: "Full Name",
    namePlaceholder: "Your Name",
    emailAddress: "Email Address",
    emailPlaceholder: "your.email@example.com",
    yourMessage: "Your Message",
    messagePlaceholder: "Tell me about your project or just say hi!",
    sendButton: "Send Message",
    directContact: "Direct Contact",
    findMeOnline: "Find Me Online",
    linkedinProfile: "LinkedIn Profile",
    twitterX: "Twitter / X",
    github: "GitHub",
    facebookProfile: "Facebook Profile",
    successTitle: "Message Sent Successfully!",
    successDesc: "Thanks for reaching out. I'll get back to you soon!",
    errorTitle: "Failed to Send Message",
    errorDesc: "Please try again or contact me directly via email."
  },
  ar: {
    title: "تواصل معي",
    subtitle: "دعنا نتحدث عن النجوم والبرمجة أو أي شيء آخر",
    sendMessage: "أرسل رسالة",
    fullName: "الاسم الكامل",
    namePlaceholder: "اسمك",
    emailAddress: "البريد الإلكتروني",
    emailPlaceholder: "بريدك@مثال.كوم",
    yourMessage: "رسالتك",
    messagePlaceholder: "أخبرني عن مشروعك أو فقط قل مرحباً!",
    sendButton: "إرسال الرسالة",
    directContact: "اتصال مباشر",
    findMeOnline: "تابعني على الإنترنت",
    linkedinProfile: "حساب لينكد إن",
    twitterX: "تويتر / إكس",
    github: "جيت هاب",
    facebookProfile: "حساب فيسبوك",
    successTitle: "تم إرسال الرسالة بنجاح!",
    successDesc: "شكراً للتواصل. سأرد عليك قريباً!",
    errorTitle: "فشل في إرسال الرسالة",
    errorDesc: "يرجى المحاولة مرة أخرى أو التواصل معي مباشرة عبر البريد الإلكتروني."
  }
}

export function ContactSection() {
  const { language } = useLanguage()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  })

  const [sectionRef, isSectionVisible] = useScrollAnimation({
    threshold: 0.05,
    triggerOnce: true
  })
  const [headerRef, isHeaderVisible] = useScrollAnimation({
    threshold: 0.5,
    triggerOnce: true
  })
  const [formCardRef, isFormCardVisible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  })
  const [infoCardRef, isInfoCardVisible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  })

  async function onSubmit(values) {
    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
        to_email: "mohammed.aljablai@gmail.com"
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      toast.add({
        title: translations[language].successTitle,
        description: translations[language].successDesc,
        type: "success",
      })

      reset()
    } catch (error) {
      console.error("Error sending email:", error)
      toast.add({
        title: translations[language].errorTitle,
        description: translations[language].errorDesc,
        type: "error"
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      dir={language === "en" ? "ltr" : "rtl"}
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
            {translations[language].title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {translations[language].subtitle}
          </p>
        </header>

        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div
            ref={formCardRef}
            className={`transition-all duration-700 ease-out ${
              isFormCardVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isFormCardVisible ? "0.1s" : "0s" }}
          >
            <Card className="shadow-xl bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-headline text-foreground">
                  <Send className={`${language === "en" ? "mr-3" : "ml-3"} h-7 w-7 text-primary`} /> {translations[language].sendMessage}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  noValidate
                >
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="flex items-center text-muted-foreground"
                    >
                      <User className={`${language === "en" ? "mr-2" : "ml-2"} h-4 w-4`} />
                      {translations[language].fullName}
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={translations[language].namePlaceholder}
                      aria-invalid={!!errors.name}
                      className={`bg-input text-foreground placeholder:text-muted-foreground/70 h-10 ${errors.name ? "border-destructive focus-visible:ring-destructive/50" : ""}`}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-sm font-medium text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="flex items-center text-muted-foreground"
                    >
                      <Mail className={`${language === "en" ? "mr-2" : "ml-2"} h-4 w-4`} />
                      {translations[language].emailAddress}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={translations[language].emailPlaceholder}
                      aria-invalid={!!errors.email}
                      className={`bg-input text-foreground placeholder:text-muted-foreground/70 h-10 ${errors.email ? "border-destructive focus-visible:ring-destructive/50" : ""}`}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-sm font-medium text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="flex items-center text-muted-foreground"
                    >
                      <MessageSquare className={`${language === "en" ? "mr-2" : "ml-2"} h-4 w-4`} />
                      {translations[language].yourMessage}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={translations[language].messagePlaceholder}
                      rows={5}
                      aria-invalid={!!errors.message}
                      className={`bg-input text-foreground placeholder:text-muted-foreground/70 ${errors.message ? "border-destructive focus-visible:ring-destructive/50" : ""}`}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-sm font-medium text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full font-semibold transition-shadow duration-300 shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className={`${language === "en" ? "mr-0.5" : "ml-0.5"} h-5 w-5`} />
                    {isSubmitting ? (
                      language === "en" ? "Sending..." : "جاري الإرسال..."
                    ) : (
                      translations[language].sendButton
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div
            ref={infoCardRef}
            className={`space-y-6 transition-all duration-700 ease-out ${
              isInfoCardVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isInfoCardVisible ? "0.15s" : "0s" }}
          >
            <Card className="shadow-xl bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-headline text-foreground">
                  <Mail className={`${language === "en" ? "mr-3" : "ml-3"} h-7 w-7 text-primary`} />
                  {translations[language].directContact}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p className="flex items-center">
                  <Mail className={`${language === "en" ? "mr-2" : "ml-2"} h-5 w-5 text-primary/80`} />{" "}
                  Mohammed.Aljablai@gmail.com
                </p>
                <p className="flex items-center">
                  <Phone className={`${language === "en" ? "mr-2 text" : "ml-2"} h-5 w-5 text-primary/80`} />
                  <span dir="ltr">{"+967 770 201 264"}</span>
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-xl bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-headline text-foreground">
                  <Linkedin className={`${language === "en" ? "mr-3" : "ml-3"} h-7 w-7 text-primary`} />
                  {translations[language].findMeOnline}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  asChild
                  className="justify-start w-full hover:bg-primary hover:text-primary-foreground"
                >
                  <Link
                    href="https://www.linkedin.com/in/moajabali/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <Linkedin className={`${language === "en" ? "mr-2" : "ml-2"} h-5 w-5`} /> {translations[language].linkedinProfile}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="justify-start w-full hover:bg-primary hover:text-primary-foreground"
                >
                  <Link
                    href="https://x.com/MoAjabali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <Twitter className={`${language === "en" ? "mr-2" : "ml-2"} h-5 w-5`} /> {translations[language].twitterX}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="justify-start w-full hover:bg-primary hover:text-primary-foreground"
                >
                  <Link
                    href="https://github.com/MoAjabali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <Github className={`${language === "en" ? "mr-2" : "ml-2"} h-5 w-5`} /> {translations[language].github}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="justify-start w-full hover:bg-primary hover:text-primary-foreground"
                >
                  <Link
                    href="https://www.facebook.com/MoAjabali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <Facebook className={`${language === "en" ? "mr-2" : "ml-2"} h-5 w-5`} /> {translations[language].facebookProfile}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
