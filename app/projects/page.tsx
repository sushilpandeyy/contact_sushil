import { projects } from '../../data/projects';
import ProjectsListClient from '../../components/ProjectsListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://contactsushil.me'),
  title: 'Projects | Sushil Pandey',
  description: 'Showcase of backend development projects, kernel programming, and system architecture work by Sushil Pandey - GSoC\'25 contributor.',
  keywords: [
    'backend projects',
    'kernel development', 
    'system architecture',
    'OpenAFS',
    'API development',
    'Python',
    'Java',
    'distributed systems',
    'GSoC projects',
    'open source',
    'portfolio'
  ],
  authors: [{ name: 'Sushil Pandey', url: 'https://contactsushil.me' }],
  creator: 'Sushil Pandey',
  openGraph: {
    title: 'Projects | Sushil Pandey',
    description: 'Showcase of backend development projects, kernel programming, and system architecture work by Sushil Pandey - GSoC\'25 contributor.',
    type: 'website',
    url: 'https://contactsushil.me/projects',
    siteName: 'Sushil Pandey Portfolio',
    locale: 'en_US',
    images: [
      {
        url: '/logo/sushil_git.jpeg',
        width: 1200,
        height: 630,
        alt: 'Sushil Pandey - Backend Developer Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Sushil Pandey',
    description: 'Showcase of backend development projects, kernel programming, and system architecture work by Sushil Pandey - GSoC\'25 contributor.',
    creator: '@sushilpandeyy',
    images: ['/logo/sushil_git.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://contactsushil.me/projects',
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ProjectsListClient projects={projects} />
    </main>
  );
}