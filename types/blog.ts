export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  tags: string[];
  readingTime: number;
  image?: string;
}
