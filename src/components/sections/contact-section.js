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

// Add this import at the top
import emailjs from "@emailjs/browser"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
})

export function ContactSection() {
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
        title: "Message Sent Successfully!",
        description: "Thanks for reaching out. I'll get back to you soon!",
        variant: "default"
      })

      form.reset()
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
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
          style={{ transitionDelay: isHeaderVisible ? "0.05s" : "0s" }}
        >
          <h2 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">
            Connect With Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let&apos;s Talk About Stars, Code, or Anything In Between
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div
            ref={formCardRef}
            className={`transition-all duration-700 ease-out ${
              isFormCardVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isFormCardVisible ? "0.1s" : "0s" }}
          >
            <Card className="bg-card/80 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center text-foreground">
                  <Send className="mr-3 h-7 w-7 text-primary" /> Send a Message
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
                            <User className="mr-2 h-4 w-4" />
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Name"
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
                            <Mail className="mr-2 h-4 w-4" />
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
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
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Your Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project or just say hi!"
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
                      className="w-full font-semibold shadow-lg hover:shadow-primary/50 transition-shadow duration-300"
                    >
                      <Send className="mr-2 h-5 w-5" /> Send Message
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
            <Card className="bg-card/80 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center text-foreground">
                  <Mail className="mr-3 h-7 w-7 text-primary" />
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-primary/80" />{" "}
                  Mohammed.Aljablai@gmail.com
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-primary/80" /> +967 770
                  201 264
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center text-foreground">
                  <Linkedin className="mr-3 h-7 w-7 text-primary" />
                  Find Me Online
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  asChild
                  className="w-full justify-start hover:bg-primary hover:text-primary-foreground"
                >
                  <Link
                    href="https://www.linkedin.com/in/moajabali/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" /> LinkedIn Profile
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="w-full justify-start hover:bg-primary hover:text-primary-foreground"
                >
                  <Link
                    href="https://x.com/MoAjabali"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="mr-2 h-5 w-5" /> Twitter / X
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="w-full justify-start hover:bg-primary hover:text-primary-foreground"
                >
                  <Link
                    href="https://github.com/MoAjabali"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" /> GitHub
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="w-full justify-start hover:bg-primary hover:text-primary-foreground"
                >
                  <Link
                    href="https://www.facebook.com/MoAjabali"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="mr-2 h-5 w-5" /> Facebook Profile
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
