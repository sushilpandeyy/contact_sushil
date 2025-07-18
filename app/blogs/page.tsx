import { blogs } from '../../data/blogs';
import BlogsListClient from '../../components/BlogsListClient';

export const metadata = {
  title: 'Blog | Sushil Pandey',
  description: 'Technical articles and insights on backend development, kernel programming, and systems engineering',
  keywords: ['backend development', 'kernel programming', 'systems engineering', 'OpenAFS', 'GSoC', 'technical blog'],
  openGraph: {
    title: 'Blog | Sushil Pandey',
    description: 'Technical articles and insights on backend development, kernel programming, and systems engineering',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Sushil Pandey',
    description: 'Technical articles and insights on backend development, kernel programming, and systems engineering',
    creator: '@sushilpandeyy',
  }
};

export default function BlogsPage() {
  return <BlogsListClient blogs={blogs} />;
}