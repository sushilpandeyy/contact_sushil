import { blogs } from '../../data/blogs';
import BlogsListClient from '../../components/BlogsListClient';

export const metadata = {
  title: 'Blog | Sushil Pandet',
  description: 'Technical articles and insights on web development',
};

export default function BlogsPage() {
  return <BlogsListClient blogs={blogs} />;
}
