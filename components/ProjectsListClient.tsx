'use client';

import { ProjectCard } from '../components/ProjectCard';
import Link from 'next/link';
import { ModeToggle } from '../components/theme-toggle';
import { Project } from '../types/project';
import Reach from './Reach';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Geist } from "next/font/google";

const geistMono = Geist({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

interface ProjectsListClientProps {
  projects: Project[];
}

export default function ProjectsListClient({ projects }: ProjectsListClientProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className={`text-xl font-semibold ${geistMono.className}`}>
              Sushil Pandey
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/projects" className="text-sm md:text-base text-primary font-medium">
                projects
              </Link>
              <Link href="https://medium.com/@contactsushil" className="text-sm md:text-base hover:text-primary transition-colors">
                blogs
              </Link>
              <ModeToggle />
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">
        {/* Page Header */}
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
          
          <div className="space-y-4">
            <h1 className={`text-3xl md:text-4xl font-semibold text-foreground ${geistMono.className}`}>
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of my development work focusing on backend systems, kernel programming, 
              and distributed architectures. Each project represents a deep dive into solving real-world problems.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium text-foreground">
              All Projects ({projects.length})
            </h2>
            <div className="text-sm text-muted-foreground">
              {projects.length} project{projects.length !== 1 ? 's' : ''}
            </div>
          </div>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={project.id} className="group">
                <ProjectCard project={project} />
                {/* Project preview on hover - optional enhancement */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2">
                  <p className="text-sm text-muted-foreground line-clamp-2 pl-6">
                    {project.description.split('\n')[0].substring(0, 150)}
                    {project.description.length > 150 ? '...' : ''}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="space-y-6 pt-8 border-t border-border/40">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-medium text-foreground">
              Interested in collaborating?
            </h3>
            <p className="text-muted-foreground">
              I'm always open to discussing new projects, opportunities, or just connecting with fellow developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.com/contactsushil"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Schedule a Call
                <ExternalLink className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:contact.sushilpandeyy@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Send Email
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-8">
          <h3 className={`text-2xl font-semibold text-foreground ${geistMono.className}`}>
            Connect
          </h3>
          <div className="border border-border/50 rounded-xl p-8 bg-card/50">
            <Reach />
          </div>
        </section>
      </div>
    </div>
  );
}