
"use client";
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Rocket } from 'lucide-react';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import React from 'react';

const projects = [
  {
    title: 'Nebula Navigator',
    description: 'An interactive 3D visualization of the Orion Nebula, built with Three.js and React. Allows users to explore star clusters and gas clouds.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'nebula space',
    tags: ['React', 'Three.js', 'WebGL', 'TypeScript'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'Cosmic Cartographer',
    description: 'A web application for charting newly discovered exoplanets. Features data filtering, sorting, and detailed planet views. Backend powered by Node.js.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'planet map',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'Starlight CMS',
    description: 'A headless CMS designed for astronomy blogs and educational content. Provides a simple interface for managing articles, images, and user accounts.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cms dashboard',
    tags: ['Python', 'Django', 'GraphQL', 'Docker'],
    liveLink: '#',
    repoLink: '#',
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [cardRef, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <Card className="bg-card/80 shadow-xl flex flex-col overflow-hidden h-full hover:shadow-primary/30">
        <CardHeader className="p-0">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
            data-ai-hint={project.imageHint}
          />
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="font-headline text-2xl text-foreground mb-2">{project.title}</CardTitle>
          <div className="mb-3 space-x-2">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary border-primary/30">{tag}</Badge>
            ))}
          </div>
          <CardDescription className="text-muted-foreground line-clamp-3">{project.description}</CardDescription>
        </CardContent>
        <CardFooter className="p-6 border-t border-border/50 flex justify-between items-center mt-auto">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" asChild className="hover:border-primary hover:text-primary">
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>
                <ExternalLink className="mr-1.5 h-4 w-4" /> Live Demo
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="hover:bg-accent hover:text-accent-foreground">
              <Link href={project.repoLink} target="_blank" rel="noopener noreferrer" aria-label={`View source code of ${project.title} on GitHub`}>
                <Github className="mr-1.5 h-4 w-4" /> Code
              </Link>
            </Button>
          </div>
          <Rocket className="h-5 w-5 text-primary/70" />
        </CardFooter>
      </Card>
    </div>
  );
}

export function ProjectsSection() {
  const [sectionRef, isSectionVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.05, triggerOnce: true });
  const [headerRef, isHeaderVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.5, triggerOnce: true });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto max-w-screen-xl px-4">
        <header
          ref={headerRef}
          className={`mb-12 text-center transition-all duration-700 ease-out ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
           style={{ transitionDelay: isHeaderVisible ? '0.05s' : '0s' }}
        >
          <h2 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">
            My Constellation of Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Creations That Shine
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
