import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface BlogFrontmatter {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  featured?: boolean;
  topics: string[];
  cardImage: string;
  imageUrl: string;
  image2Url?: string;
  slug?: string;
}

export interface BlogPost extends BlogFrontmatter {
  content: string;
  slug: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blogs");

export function getAllBlogSlugs(): string[] {
  try {
    if (!fs.existsSync(CONTENT_DIR)) {
      fs.mkdirSync(CONTENT_DIR, { recursive: true });
      return [];
    }

    const files = fs.readdirSync(CONTENT_DIR);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch (error) {
    console.error("Error reading blog directory:", error);
    return [];
  }
}

export function getBlogBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      ...(data as BlogFrontmatter),
      content,
      slug,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getAllBlogs(): BlogPost[] {
  const slugs = getAllBlogSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    .filter((blog): blog is BlogPost => blog !== null)
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return blogs;
}

export function getFeaturedBlogs(): BlogPost[] {
  return getAllBlogs().filter((blog) => blog.featured);
}

export function getBlogsByTopic(topic: string): BlogPost[] {
  return getAllBlogs().filter((blog) =>
    blog.topics.some((t) => t.toLowerCase() === topic.toLowerCase())
  );
}
