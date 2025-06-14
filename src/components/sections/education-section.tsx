
"use client";
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, BookOpen, CalendarDays } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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

interface EducationTimelineItemProps {
  edu: typeof educationHistory[0];
  index: number;
}

function EducationTimelineItem({ edu, index }: EducationTimelineItemProps) {
  const [itemRef, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={itemRef}
      className={`mb-12 relative flex items-start transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10' // Slide from left
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }} // Stagger based on index
    >
      <div className="z-10 flex-shrink-0 mt-1 w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-lg border-2 border-primary/60">
        {React.cloneElement(edu.icon as React.ReactElement, { className: "h-6 w-6 text-primary" })}
      </div>
      <div className="ml-6 flex-grow">
        <Card className="bg-card/80 shadow-xl overflow-hidden">
          <CardHeader className="p-6">
            <div>
              <CardTitle className="font-headline text-2xl text-foreground">{edu.institution}</CardTitle>
              <CardDescription className="text-primary font-semibold">{edu.degree}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-3">
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>{edu.period}</span>
            </div>
            <p className="text-muted-foreground">{edu.description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function EducationSection() {
  const [sectionRef, isSectionVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1, triggerOnce: true });
  const [headerRef, isHeaderVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.5, triggerOnce: true });

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto max-w-screen-lg px-4">
        <header
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-700 ease-out ${ // Increased mb for timeline spacing
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isHeaderVisible ? '0.05s' : '0s' }}
        >
          <h2 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">
            My Academic Journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Foundations of My Knowledge
          </p>
        </header>
        <div className="relative">
          {/* Vertical timeline bar */}
          <div className="absolute left-[1.5rem] top-2 bottom-2 w-1 bg-primary/30 transform -translate-x-1/2 rounded-full"></div>
          {educationHistory.map((edu, index) => (
            <EducationTimelineItem key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
