import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden py-20 md:py-32">
      <div className="container mx-auto max-w-screen-md px-4 text-center">
        <h1 className="font-headline text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Welcome to My Universe
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
          I&apos;m [Your Name], a passionate learner and creator. Explore my journey, skills, and projects as we navigate the cosmos of technology together.
        </p>
        <p className="mt-4 max-w-xl mx-auto text-md text-primary sm:text-lg animate-slide-up" style={{ animationDelay: '0.6s' }}>
          Let&apos;s make dreams a reality.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <Button asChild size="lg" className="font-semibold shadow-lg hover:shadow-primary/50 transition-shadow duration-300">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-semibold shadow-lg hover:shadow-accent/50 transition-shadow duration-300">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce animate-fade-in" style={{animationDelay: '1s'}}>
        <Link href="#about" aria-label="Scroll to About Me section">
          <MoveDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
        </Link>
      </div>
    </section>
  );
}
