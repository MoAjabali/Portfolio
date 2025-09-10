"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast" // Updated import path
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
// أضف استيراد سياق اللغة
import { useLanguage } from "@/context/LanguageContext"

// Add this import at the top
import emailjs from "@emailjs/browser"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
})

// إضافة ترجمات للمكون
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
    // رسائل النجاح والخطأ
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
    // رسائل النجاح والخطأ
    successTitle: "تم إرسال الرسالة بنجاح!",
    successDesc: "شكراً للتواصل. سأرد عليك قريباً!",
    errorTitle: "فشل في إرسال الرسالة",
    errorDesc: "يرجى المحاولة مرة أخرى أو التواصل معي مباشرة عبر البريد الإلكتروني."
  }
}

export function ContactSection() {
  // استخدام سياق اللغة
  const { language } = useLanguage()
  const { toast } = useToast()
  const form = useForm({
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

      toast({
        title: translations[language].successTitle,
        description: translations[language].successDesc,
        variant: "default"
      })

      form.reset()
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: translations[language].errorTitle,
        description: translations[language].errorDesc,
        variant: "destructive"
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
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center text-muted-foreground">
                            <User className={`${language === "en" ? "mr-2" : "ml-2"} h-4 w-4`} />
                            {translations[language].fullName}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={translations[language].namePlaceholder}
                              {...field}
                              className="bg-input text-foreground placeholder:text-muted-foreground/70"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center text-muted-foreground">
                            <Mail className={`${language === "en" ? "mr-2" : "ml-2"} h-4 w-4`} />
                            {translations[language].emailAddress}
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={translations[language].emailPlaceholder}
                              {...field}
                              className="bg-input text-foreground placeholder:text-muted-foreground/70"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center text-muted-foreground">
                            <MessageSquare className={`${language === "en" ? "mr-2" : "ml-2"} h-4 w-4`} />
                            {translations[language].yourMessage}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={translations[language].messagePlaceholder}
                              {...field}
                              rows={5}
                              className="bg-input text-foreground placeholder:text-muted-foreground/70"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-semibold transition-shadow duration-300 shadow-lg hover:shadow-primary/50"
                    >
                      <Send className={`${language === "en" ? "mr-2" : "ml-2"} h-5 w-5`} /> {translations[language].sendButton}
                    </Button>
                  </form>
                </Form>
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
                  <span dir="ltr">{"\+967 770 201 264"}</span>
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
