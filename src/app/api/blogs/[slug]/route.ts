import { blogs } from "@/lib/constants/blog-posts";
import { getBlogBySlug } from "@/lib/mdx";
import { generateSlug } from "@/lib/utils/format";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles GET requests to fetch a blog post by its slug.
 * First tries to find MDX blog posts, then falls back to legacy blog posts.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {Promise<NextResponse>} - A promise that resolves to a NextResponse object containing the blog post data or an error message.
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
  // Extract slug from the pathname
  const slug = req.nextUrl.pathname.split("/").pop(); // Get the last part of the URL

  if (!slug) {
    return NextResponse.json(
      { message: "Blog post not found" },
      { status: 404 }
    );
  }

  // First, try to find an MDX blog post
  const mdxBlogPost = getBlogBySlug(slug);
  if (mdxBlogPost) {
    return NextResponse.json(mdxBlogPost);
  }

  // Fall back to legacy blog posts
  const legacyBlogPost = blogs.find(
    (blog: { title: string }) => generateSlug(blog.title) === slug
  );

  if (!legacyBlogPost) {
    return NextResponse.json(
      { message: "Blog post not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(legacyBlogPost);
}
