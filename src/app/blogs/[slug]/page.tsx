import MDXBlogRenderer from "@/components/MDXBlogRenderer";
import { blogs } from "@/lib/constants/blog-posts";
import { getBlogBySlug } from "@/lib/mdx";
import { generateSlug } from "@/lib/utils/format";
import { notFound } from "next/navigation";
import LegacyBlogRenderer from "./LegacyBlogRenderer";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  // First, try to find an MDX blog post
  const mdxBlogPost = getBlogBySlug(slug);
  if (mdxBlogPost) {
    return <MDXBlogRenderer post={mdxBlogPost} />;
  }

  // Fall back to legacy blog posts
  const legacyBlogPost = blogs.find(
    (blog: { title: string }) => generateSlug(blog.title) === slug
  );

  if (!legacyBlogPost) {
    notFound();
  }

  // Handle legacy blog posts with client component wrapper
  return <LegacyBlogRenderer post={legacyBlogPost} />;
}
