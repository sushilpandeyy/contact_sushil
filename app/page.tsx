'use client'

import { ModeToggle } from "../components/theme-toggle";
import Reach from "../components/Reach";
import Experience from "../components/Experience";
import Link from "next/link";
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { Geist } from "next/font/google";

const geistMono = Geist({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export default function Home() {
  return (
    <div className="min-h-screen">
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
              <h1 className={`text-3xl md:text-4xl font-medium gap-2 dark:text-neutral-200 ${geistMono.className}`}>
                Sushil Pandey
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-sm md:text-md text-neutral-600 dark:text-neutral-400">
                  Backend Developer <span className="mx-1">• GSoC'25 @OpenAFS</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200">
              <span className="text-cyan-500 dark:text-cyan-400">*</span> Passionate about <span className="text-cyan-500 dark:text-cyan-400">low-level kernel development</span> and <span className="text-cyan-500 dark:text-cyan-400">distributed systems</span>. Currently working on <span className="text-cyan-500 dark:text-cyan-400">OpenAFS kernels</span> through GSoC 2025. I honestly suck at frontend, but give me the right <span className="text-cyan-500 dark:text-cyan-400">mood or deadline</span> and I'll craft any platform.
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md text-sm md:text-base">
                Backend Dev
              </span>
              <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md text-sm md:text-base">
                Low Level System
              </span>
              <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md text-sm md:text-base">
                Open Source
              </span>
              <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md text-sm md:text-base">
                GSoC
              </span>
            </div>

            <a
              href="/resume/sushil.pdf"
              className="inline-flex items-center justify-center px-3 py-2 bg-neutral-100 dark:bg-neutral-800/30 text-neutral-800 dark:text-neutral-200 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700/50 transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`flex items-center text-sm lg:text-base`}>
                <span>View Resume</span>
              </div>
            </a>

            <Link
              href={'https://cal.com/contactsushil'}
              target="_blank"
              className={`pl-4 text-lg md:text-xl hover:underline ${geistMono.className}`}
            >
              Call
            </Link>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-medium mb-4">Experience</h2>
          <Experience />
        </div>

        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-medium mb-4">Work</h2>
          <div className="space-y-2">
            {projects.slice(0, 3).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center mt-6 text-base md:text-lg hover:underline"
          >
            View all projects →
          </Link>
        </div>

        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-medium mb-4">Connect</h2>
          <Reach />
        </div>
      </div>
    </div>
  );
}