import { getFeaturedBlogs } from "@/lib/mdx";
import { NextResponse } from "next/server";

/**
 * Handles GET requests to fetch featured blog posts.
 *
 * @returns {Promise<NextResponse>} - A promise that resolves to a NextResponse object containing the featured blog posts.
 */
export async function GET(): Promise<NextResponse> {
  try {
    const featuredBlogs = getFeaturedBlogs();
    return NextResponse.json(featuredBlogs);
  } catch (error) {
    console.error("Error fetching featured blogs:", error);
    return NextResponse.json(
      { message: "Failed to fetch featured blogs" },
      { status: 500 }
    );
  }
}
