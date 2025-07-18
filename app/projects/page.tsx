import { projects } from '../../data/projects';
import ProjectsListClient from '../../components/ProjectsListClient';

export const metadata = {
  title: 'Projects | Sushil Pandey',
  description: 'Showcase of backend development projects, kernel programming, and system architecture work',
  keywords: ['backend projects', 'kernel development', 'system architecture', 'OpenAFS', 'API development', 'Python', 'Java'],
  openGraph: {
    title: 'Projects | Sushil Pandey',
    description: 'Showcase of backend development projects, kernel programming, and system architecture work',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Sushil Pandey',
    description: 'Showcase of backend development projects, kernel programming, and system architecture work',
    creator: '@sushilpandeyy',
  }
};

export default function ProjectsPage() {
  return <ProjectsListClient projects={projects} />;
}