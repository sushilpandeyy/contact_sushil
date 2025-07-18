import { BlogPost } from '../types/blog';
import Link from 'next/link';

interface BlogCardProps {
  blog: BlogPost;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <article className="border-b border-neutral-200 dark:border-neutral-700 pb-6 hover:opacity-80 transition-opacity">
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-medium text-neutral-900 dark:text-neutral-100">
            {blog.title}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
            {blog.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
            <span>{blog.publishedAt}</span>
            <span>•</span>
            <span>{blog.readingTime} min read</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};
