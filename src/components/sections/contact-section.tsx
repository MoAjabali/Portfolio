"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Linkedin, Github, Phone, User, MessageSquare } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you'd send this data to a server
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
      variant: "default", // or 'success' if you add a success variant
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-screen-lg px-4">
        <header className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground sm:text-5xl animate-slide-up">
            Connect With Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground animate-slide-up" style={{animationDelay: '0.1s'}}>
            Let&apos;s Talk About Stars, Code, or Anything In Between
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Card className="bg-card/80 shadow-xl animate-slide-up" style={{animationDelay: '0.2s'}}>
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center text-foreground">
                <Send className="mr-3 h-7 w-7 text-primary" /> Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-muted-foreground"><User className="mr-2 h-4 w-4" />Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="bg-input text-foreground placeholder:text-muted-foreground/70"/>
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
                        <FormLabel className="flex items-center text-muted-foreground"><Mail className="mr-2 h-4 w-4" />Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} className="bg-input text-foreground placeholder:text-muted-foreground/70"/>
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
                        <FormLabel className="flex items-center text-muted-foreground"><MessageSquare className="mr-2 h-4 w-4" />Your Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell me about your project or just say hi!" {...field} rows={5} className="bg-input text-foreground placeholder:text-muted-foreground/70"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full font-semibold shadow-lg hover:shadow-primary/50 transition-shadow duration-300">
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <Card className="bg-card/80 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center text-foreground">
                  <Mail className="mr-3 h-7 w-7 text-primary" />
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-primary/80" /> your.email@stardust.com
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-primary/80" /> +1 (555) STAR-DUST
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
                 <Button variant="outline" asChild className="w-full justify-start hover:border-primary hover:text-primary">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-5 w-5" /> LinkedIn Profile
                    </Link>
                 </Button>
                 <Button variant="outline" asChild className="w-full justify-start hover:border-primary hover:text-primary">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" /> GitHub Repositories
                    </Link>
                 </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
