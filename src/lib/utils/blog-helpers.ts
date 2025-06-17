import { getAllBlogs, getBlogsByTopic, getFeaturedBlogs } from "@/lib/mdx";

/**
 * Get all blog slugs from MDX files
 */
export function getAllBlogSlugs(): string[] {
  return getAllBlogs().map((blog) => blog.slug);
}

/**
 * Get featured blog posts from MDX sources
 */
export function getAllFeaturedBlogs() {
  return getFeaturedBlogs();
}

/**
 * Search blogs by topic
 */
export function searchBlogsByTopic(topic: string) {
  return getBlogsByTopic(topic);
}
