import { projects } from '../../data/projects';
import ProjectsListClient from '../../components/ProjectsListClient';

export const metadata = {
  title: 'Projects | Sushil Pandet',
  description: 'Showcase of my projects and development work',
};

export default function ProjectsPage() {
  return <ProjectsListClient projects={projects} />;
}
