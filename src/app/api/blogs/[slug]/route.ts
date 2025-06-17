import { getBlogBySlug } from "@/lib/mdx";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles GET requests to fetch a blog post by its slug.
 * Fetches MDX blog posts from the content directory.
 *
 * @param {NextRequest} req - The incoming request object.
 * @param {object} context - The route context containing params.
 * @returns {Promise<NextResponse>} - A promise that resolves to a NextResponse object containing the blog post data or an error message.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
): Promise<NextResponse> {
  const { slug } = await params;

  if (!slug) {
    return NextResponse.json(
      { message: "Blog post not found" },
      { status: 404 }
    );
  }

  const mdxBlogPost = getBlogBySlug(slug);
  if (!mdxBlogPost) {
    return NextResponse.json(
      { message: "Blog post not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(mdxBlogPost);
}
