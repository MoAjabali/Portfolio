
"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Cpu, Lightbulb, Code2, Users, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'Technical' | 'Soft';
}

const skillsData: Skill[] = [
  { name: 'JavaScript / TypeScript', level: 90, icon: <Code2 className="h-5 w-5" />, category: 'Technical' },
  { name: 'React / Next.js', level: 85, icon: <Code2 className="h-5 w-5" />, category: 'Technical' },
  { name: 'Node.js / Express', level: 75, icon: <Cpu className="h-5 w-5" />, category: 'Technical' },
  { name: 'Python', level: 80, icon: <Code2 className="h-5 w-5" />, category: 'Technical' },
  { name: 'Problem Solving', level: 95, icon: <Lightbulb className="h-5 w-5" />, category: 'Soft' },
  { name: 'Team Collaboration', level: 90, icon: <Users className="h-5 w-5" />, category: 'Soft' },
  { name: 'Adaptability', level: 88, icon: <Star className="h-5 w-5" />, category: 'Soft' },
];

interface SkillItemProps {
  skill: Skill;
  isVisible: boolean; // Pass isVisible from parent for progress animation
}

function SkillItem({ skill, isVisible }: SkillItemProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      // Start animation slightly after the card becomes visible for better effect
      const timer = setTimeout(() => setProgress(skill.level), 200); // 200ms delay
      return () => clearTimeout(timer);
    }
  }, [skill.level, isVisible]);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
        <span className="flex items-center">
          {React.cloneElement(skill.icon as React.ReactElement, { className: "mr-2 h-5 w-5 text-primary" })}
          {skill.name}
        </span>
        <span>{skill.level}%</span>
      </div>
      <Progress value={progress} className="h-2 [&>div]:bg-primary transition-all duration-500 ease-out" aria-label={`${skill.name} proficiency ${skill.level}%`} />
    </div>
  );
}

export function SkillsSection() {
  const [sectionRef, isSectionVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1, triggerOnce: true });
  const [headerRef, isHeaderVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.5, triggerOnce: true });
  const [techCardRef, isTechCardVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, triggerOnce: true });
  const [softCardRef, isSoftCardVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, triggerOnce: true });

  const technicalSkills = skillsData.filter(s => s.category === 'Technical');
  const softSkills = skillsData.filter(s => s.category === 'Soft');

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-16 md:py-24 bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-screen-lg px-4">
        <header 
          ref={headerRef}
          className={`mb-12 text-center transition-all duration-500 ease-out ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isHeaderVisible ? '0.05s' : '0s' }}
        >
          <h2 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">
            My Skill Galaxy
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Constellations of My Expertise
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div
            ref={techCardRef}
            className={`transition-all duration-500 ease-out ${
              isTechCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: isTechCardVisible ? '0.1s' : '0s' }}
          >
            <Card className="bg-card/80 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center text-foreground">
                  <Cpu className="mr-3 h-7 w-7 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <SkillItem key={skill.name} skill={skill} isVisible={isTechCardVisible} />
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div
            ref={softCardRef}
            className={`transition-all duration-500 ease-out ${
              isSoftCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: isSoftCardVisible ? '0.15s' : '0s' }}
          >
            <Card className="bg-card/80 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center text-foreground">
                  <Lightbulb className="mr-3 h-7 w-7 text-primary" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {softSkills.map((skill, index) => (
                  <SkillItem key={skill.name} skill={skill} isVisible={isSoftCardVisible} />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

