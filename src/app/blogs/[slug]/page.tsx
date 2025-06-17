import MDXBlogRenderer from "@/components/MDXBlogRenderer";
import { getBlogBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const mdxBlogPost = getBlogBySlug(slug);
  if (!mdxBlogPost) {
    notFound();
  }

  return <MDXBlogRenderer post={mdxBlogPost} />;
}
