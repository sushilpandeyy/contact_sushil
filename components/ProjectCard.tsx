import { Project } from '../types/project';
import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  isDetailed?: boolean;
}

export const ProjectCard = ({ project, isDetailed = false }: ProjectCardProps) => {
  if (!isDetailed) {
    return (
      <Link href={`/projects/${project.id}`}>
        <div className="hover:underline py-2 text-lg md:text-xl pb-5 border-b border-neutral-600 dark:border-neutral-500">
          {project.title}
        </div>
      </Link>
    );
  }

  return (
    <article className="prose prose-neutral dark:prose-invert prose-headings:font-medium max-w-none">
      <header className="not-prose mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-4xl font-medium">{project.title}</h1>
          <div className="flex items-center gap-4">
            {project.liveLink && (
              <Link href={project.liveLink} target="_blank" className="bg-neutral-200 dark:bg-neutral-800 p-2 rounded-full hover:opacity-70">
                <FiArrowUpRight className="size-5 md:size-6" />
              </Link>
            )}
            {project.githubLink && (
              <Link href={project.githubLink} target="_blank" className="bg-neutral-200 dark:bg-neutral-800 p-2 rounded-full hover:opacity-70">
                <FaGithub className="size-5 md:size-6" />
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {project.video ? (
        <div className="mb-8">
          <video
            controls
            className="w-full rounded-lg"
            poster={project.image}
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : project.image && (
        <div className="mb-8">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="w-full rounded-lg"
          />
        </div>
      )}

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
                <div key={idx} className="flex flex-wrap gap-4 my-4">
                  {srcs.map((src, i) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`Project image ${i + 1}`}
                      width={400}
                      height={200}
                      className="rounded-lg"
                    />
                  ))}
                </div>
              );
            }
            if (line.trim().length > 0) {
              return (
                <p key={idx} className="text-lg leading-relaxed">
                  {line}
                </p>
              );
            }
            return null;
          })}

        <div className="flex flex-wrap gap-4 pt-4">
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-md hover:opacity-90 transition-opacity"
            >
              <FiArrowUpRight className="size-4" />
              Live Demo
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <FaGithub className="size-4" />
              View Code
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
