import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, BookOpen, CalendarDays } from 'lucide-react';

const educationHistory = [
  {
    institution: 'University of Cosmos',
    degree: 'M.Sc. in Astro-informatics',
    period: '2020 - 2022',
    description: 'Focused on data analysis for celestial bodies and advanced algorithm design for space exploration. Thesis on "Predictive Modeling of Supernova Events".',
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
  },
  {
    institution: 'Planetaria College',
    degree: 'B.Sc. in Computer Science & Astronomy',
    period: '2016 - 2020',
    description: 'Dual major program combining core computer science principles with astronomical studies. Capstone project involved developing a star-charting application.',
    icon: <BookOpen className="h-8 w-8 text-primary" />,
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-screen-lg px-4">
        <header className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground sm:text-5xl animate-slide-up" style={{animationDelay: '0.1s'}}>
            My Academic Journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground animate-slide-up" style={{animationDelay: '0.2s'}}>
            Foundations of My Knowledge
          </p>
        </header>
        <div className="space-y-8">
          {educationHistory.map((edu, index) => (
            <Card 
              key={index} 
              className="bg-card/80 shadow-xl overflow-hidden animate-slide-up" 
              style={{animationDelay: `${0.3 + index * 0.15}s`}}
            >
              <CardHeader className="flex flex-row items-start space-x-4 p-6 bg-card/50">
                <div className="flex-shrink-0 mt-1">{edu.icon}</div>
                <div>
                  <CardTitle className="font-headline text-2xl text-foreground">{edu.institution}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{edu.degree}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
