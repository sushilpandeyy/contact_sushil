'use client'

import { ModeToggle } from "../components/theme-toggle";
import Reach from "../components/Reach";
import Experience from "../components/Experience";
import Link from "next/link";
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { Geist } from "next/font/google";
import { Badge } from "../src/components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../src/components/ui/card";
import { Download, Calendar, ExternalLink, Github, Code, Server, Database } from "lucide-react";

const geistMono = Geist({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export default function Home() {
  const skills = [
    { name: "Backend Dev", icon: Server },
    { name: "Kernel Programming", icon: Code },
    { name: "Distributed Systems", icon: Database },
    { name: "GSoC'25", icon: ExternalLink },
    { name: "Open Source", icon: Github },
  ];

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
              <Link href="/projects" className="text-sm md:text-base hover:text-primary transition-colors">
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

      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-6">
            <div>
              <h1 className={`text-4xl md:text-5xl font-semibold tracking-tight text-foreground ${geistMono.className}`}>
                Sushil Pandey
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-2">
                Backend Developer • GSoC'25 @OpenAFS
              </p>
            </div>

            {/* Description */}
            <div className="max-w-2xl">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                <span className="text-cyan-500 dark:text-cyan-400">*</span> Passionate about{" "}
                <span className="text-cyan-500 dark:text-cyan-400 font-medium">low-level kernel development</span> and{" "}
                <span className="text-cyan-500 dark:text-cyan-400 font-medium">distributed systems</span>. Currently working on{" "}
                <span className="text-cyan-500 dark:text-cyan-400 font-medium">OpenAFS kernels</span> through GSoC 2025. 
                I honestly suck at frontend, but give me the right{" "}
                <span className="text-cyan-500 dark:text-cyan-400 font-medium">mood or deadline</span> and I'll craft any platform.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge 
                  key={skill.name} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium flex items-center gap-2 hover:bg-accent transition-colors"
                >
                  <skill.icon className="h-3 w-3" />
                  {skill.name}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 font-medium" asChild>
                <a href="/resume/sushil.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  View Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 font-medium" asChild>
                <Link href="https://cal.com/contactsushil" target="_blank">
                  <Calendar className="h-4 w-4" />
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <h2 className={`text-2xl md:text-3xl font-semibold ${geistMono.className}`}>
            Experience
          </h2>
          <div className="space-y-6">
            <Experience />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className={`text-2xl md:text-3xl font-semibold ${geistMono.className}`}>
              Featured Work
            </h2>
            <Link
              href="/projects"
              className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              View all <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
          
          <div className="space-y-2">
            {projects.slice(0, 3).map(project => (
              <Card key={project.id} className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-sm">
                <CardContent className="p-0">
                  <ProjectCard project={project} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <h2 className={`text-2xl md:text-3xl font-semibold ${geistMono.className}`}>
            Let's Connect
          </h2>
          <Card className="border-border/50 hover:border-border transition-colors">
            <CardContent className="p-6">
              <Reach />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-16">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Sushil Pandey. Built with Next.js and Tailwind CSS.
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://github.com/sushilpandeyy" 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link 
                href="https://linkedin.com/in/contactsushil" 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}