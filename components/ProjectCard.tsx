import { Project } from '../types/project';
import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  isDetailed?: boolean;
}

export const ProjectCard = ({ project, isDetailed = false }: ProjectCardProps) => {
  if (!isDetailed) {
    return (
      <Link href={`/projects/${project.id}`}>
        <div className="group py-3 border-b border-border/30 hover:border-border transition-all duration-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-xl font-medium text-foreground group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <article className="space-y-8">
      {/* Header */}
      <header className="space-y-6">
        <div className="flex items-start justify-between">
          <h1 className="text-2xl md:text-4xl font-medium text-foreground flex-1">
            {project.title}
          </h1>
          <div className="flex items-center gap-2 ml-6">
            {project.liveLink && (
              <Link 
                href={project.liveLink} 
                target="_blank"
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <FiArrowUpRight className="w-5 h-5 text-muted-foreground" />
              </Link>
            )}
            {project.githubLink && (
              <Link 
                href={project.githubLink} 
                target="_blank"
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <FaGithub className="w-5 h-5 text-muted-foreground" />
              </Link>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      {/* Media */}
      {(project.video || project.image) && (
        <div className="rounded-lg overflow-hidden border border-border/50">
          {project.video ? (
            <video
              controls
              className="w-full aspect-video"
              poster={project.image}
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : project.image && (
            <div className="aspect-video relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="space-y-4">
          {(project.longDescription || project.description)
            .split('\n')
            .map((line, idx) => {
              const imageMatch = line.match(/^\[(?:'|")(.+)(?:'|")\]$/) || line.match(/^\[(.+)\]$/);
              if (imageMatch) {
                const srcs = imageMatch[1]
                  .split(',')
                  .map(src => src.replace(/^['"]|['"]$/g, '').trim());
                return (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    {srcs.map((src, i) => (
                      <div key={src} className="aspect-video relative rounded-lg overflow-hidden border border-border/50">
                        <Image
                          src={src}
                          alt={`Project image ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                );
              }
              if (line.trim().length > 0) {
                return (
                  <p key={idx} className="text-base leading-relaxed text-muted-foreground">
                    {line}
                  </p>
                );
              }
              return null;
            })}
        </div>
      </div>

      {/* Actions */}
      {(project.liveLink || project.githubLink) && (
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          {project.liveLink && (
            <Button size="lg" className="gap-2" asChild>
              <Link href={project.liveLink} target="_blank">
                <FiArrowUpRight className="w-4 h-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {project.githubLink && (
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href={project.githubLink} target="_blank">
                <FaGithub className="w-4 h-4" />
                View Code
              </Link>
            </Button>
          )}
        </div>
      )}
    </article>
  );
};