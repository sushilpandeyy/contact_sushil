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
    <div className="min-h-screen">
      <OnekoCat />
      <div className="flex flex-col items-start px-6 md:px-12 pt-4 md:pt-6 space-y-8 md:space-y-12 max-w-3xl w-full mx-auto">
        <div className="w-full flex justify-end items-center gap-4">
          <Link href={"/projects"} className="text-md md:text-lg hover:underline">
            projects
          </Link>
          <Link href={"/blogs"} className="text-md md:text-lg hover:underline">
            blogs
          </Link>
          <ModeToggle />
        </div>

        <div>
          <div className="flex items-center gap-6 mb-4">
            <div>
              <h1 className={`text-4xl md:text-5xl font-semibold tracking-tight text-foreground ${geistMono.className}`}>
                Sushil Pandey
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-sm md:text-md text-neutral-600 dark:text-neutral-400">
                  backend developer <span className="mx-1">• GSoC'25 @OpenAFS</span>
                </p>
              </div>
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

          <div className="mt-5 space-y-4">
            <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200">
              <span className="text-cyan-500 dark:text-cyan-400">*</span> passionate about <span className="text-cyan-500 dark:text-cyan-400">low-level kernel development</span> and <span className="text-cyan-500 dark:text-cyan-400">distributed systems</span>. currently working on <span className="text-cyan-500 dark:text-cyan-400">OpenAFS kernels</span> through GSoC 2025. i honestly suck at frontend, but give me the right <span className="text-cyan-500 dark:text-cyan-400">mood or deadline</span> and i'll craft any platform.
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md text-sm md:text-base">
                backend
              </span>
              <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md text-sm md:text-base">
                kernels
              </span>
              <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md text-sm md:text-base">
                systems
              </span>
              <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md text-sm md:text-base">
                GSoC
              </span>
            </div>

            <a
              href="/sushil-pandey-resume.pdf"
              className="inline-flex items-center justify-center px-3 py-2 bg-neutral-100 dark:bg-neutral-800/30 text-neutral-800 dark:text-neutral-200 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700/50 transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`flex items-center text-sm lg:text-base`}>
                <span>View Resume</span>
              </div>
            </a>

            <Link
              href={'https://cal.com/sushil-pandey/30min'}
              target="_blank"
              className={`pl-4 text-lg md:text-xl hover:underline ${geistMono.className}`}
            >
              schedule a call
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