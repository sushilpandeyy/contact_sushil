import { blogs } from '../../data/blogs';
import BlogsListClient from '../../components/BlogsListClient';

export const metadata = {
  title: 'Technical Blog - Backend Development & Systems Engineering',
  description: 'In-depth technical articles and insights on backend development, kernel programming, distributed systems, and systems engineering by Sushil Pandey. Explore OpenAFS, GSoC experiences, and advanced programming concepts.',
  keywords: [
    'backend development blog',
    'kernel programming tutorials',
    'systems engineering articles',
    'OpenAFS development',
    'GSoC 2025',
    'technical blog',
    'distributed systems',
    'low-level programming',
    'system architecture',
    'performance optimization',
    'Python tutorials',
    'Java programming',
    'Go development',
    'software engineering best practices'
  ],
  openGraph: {
    title: 'Technical Blog - Backend Development & Systems Engineering | Sushil Pandey',
    description: 'In-depth technical articles and insights on backend development, kernel programming, distributed systems, and systems engineering.',
    type: 'website',
    url: 'https://contactsushil.me/blogs',
    siteName: 'Sushil Pandey Portfolio',
    images: [{
      url: '/logo/sushil_git.jpeg',
      width: 1200,
      height: 630,
      alt: 'Sushil Pandey Technical Blog'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sushilpandeyy',
    creator: '@sushilpandeyy',
    title: 'Technical Blog - Backend Development & Systems Engineering',
    description: 'In-depth technical articles and insights on backend development, kernel programming, distributed systems, and systems engineering.',
    images: ['/logo/sushil_git.jpeg'],
  },
  alternates: {
    canonical: 'https://contactsushil.me/blogs',
  },
};

export default function BlogsPage() {
  return <BlogsListClient blogs={blogs} />;
}