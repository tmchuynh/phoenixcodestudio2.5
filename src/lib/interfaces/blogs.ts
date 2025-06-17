import { ListDetail } from "./services";

export interface BlogPost {
  title: string;
  author: string;
  cardImage: string;
  imageUrl: string;
  image2Url: string;
  excerpt: string;
  featured: boolean;
  topics: string[];
  intro: string[];
  list: ListDetail[];
  conclusions: string[];
  date: { day: number; month: number; year: number };
}

// New MDX-based blog post interface
export interface MDXBlogPost {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  featured?: boolean;
  topics: string[];
  cardImage: string;
  imageUrl: string;
  image2Url?: string;
  slug: string;
  content: string;
}
