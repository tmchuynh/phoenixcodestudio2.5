import { blogs } from "@/lib/constants/blog-posts";
import { getAllBlogs } from "@/lib/mdx";
import { generateSlug } from "@/lib/utils/format";

/**
 * Get all blog posts (both MDX and legacy) with their slugs
 */
export function getAllBlogSlugs(): string[] {
  // Get MDX blog slugs
  const mdxSlugs = getAllBlogs().map((blog) => blog.slug);

  // Get legacy blog slugs
  const legacySlugs = blogs.map((blog) => generateSlug(blog.title));

  return [...mdxSlugs, ...legacySlugs];
}

/**
 * Get featured blog posts from both MDX and legacy sources
 */
export function getAllFeaturedBlogs() {
  const mdxBlogs = getAllBlogs().filter((blog) => blog.featured);
  const legacyBlogs = blogs.filter((blog) => blog.featured);

  return {
    mdx: mdxBlogs,
    legacy: legacyBlogs,
    all: [...mdxBlogs, ...legacyBlogs],
  };
}

/**
 * Search blogs by topic
 */
export function searchBlogsByTopic(topic: string) {
  const mdxBlogs = getAllBlogs().filter((blog) =>
    blog.topics.some((t) => t.toLowerCase().includes(topic.toLowerCase()))
  );

  const legacyBlogs = blogs.filter((blog) =>
    blog.topics.some((t) => t.toLowerCase().includes(topic.toLowerCase()))
  );

  return {
    mdx: mdxBlogs,
    legacy: legacyBlogs,
    all: [...mdxBlogs, ...legacyBlogs],
  };
}
