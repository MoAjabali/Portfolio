import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserRound, MapPin, Briefcase, Sparkles } from 'lucide-react';

export function AboutMeSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-screen-lg px-4">
        <header className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground sm:text-5xl animate-slide-up">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground animate-slide-up" style={{animationDelay: '0.1s'}}>
            A Glimpse into My World
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 flex justify-center animate-slide-up" style={{animationDelay: '0.2s'}}>
            <Image
              src="https://placehold.co/400x400.png"
              alt="My Profile Picture"
              width={300}
              height={300}
              className="rounded-full object-cover shadow-2xl border-4 border-primary/50"
              data-ai-hint="profile person"
            />
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <Card className="bg-card/80 shadow-xl animate-slide-up" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center">
                  <UserRound className="mr-3 h-7 w-7 text-primary" />
                  Who I Am
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  Hello! I&apos;m [Your Name], a dedicated and enthusiastic individual with a deep passion for [Your Field/Interests, e.g., web development, data science, creative design]. I thrive on challenges and continuously seek opportunities to learn and grow, both personally and professionally.
                </p>
                <p>
                  My journey in [Your Field] is driven by a desire to create meaningful and impactful solutions. I believe in the power of technology and creativity to transform ideas into reality and make a positive difference in the world.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-card/80 shadow-xl animate-slide-up" style={{animationDelay: '0.4s'}}>
                <CardHeader>
                  <CardTitle className="font-headline text-xl flex items-center">
                    <MapPin className="mr-2 h-6 w-6 text-primary" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>[Your City, Country]</p>
                  <p className="text-sm">Open to remote opportunities.</p>
                </CardContent>
              </Card>
              <Card className="bg-card/80 shadow-xl animate-slide-up" style={{animationDelay: '0.5s'}}>
                <CardHeader>
                  <CardTitle className="font-headline text-xl flex items-center">
                    <Sparkles className="mr-2 h-6 w-6 text-primary" />
                    Interests
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>[Interest 1], [Interest 2], Stargazing</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
