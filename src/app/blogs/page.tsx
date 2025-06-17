import BlogCard from "@/components/cards/ArticleCards";
import { blogs } from "@/lib/constants/blog-posts";
import { BlogPost, MDXBlogPost } from "@/lib/interfaces/blogs";
import { getAllBlogs } from "@/lib/mdx";
import { sortByProperty } from "@/lib/utils/sort";

// Convert MDX blog post to legacy format for compatibility
function convertMDXToLegacy(mdxPost: MDXBlogPost): BlogPost {
  const dateObj = new Date(mdxPost.date);
  return {
    title: mdxPost.title,
    author: mdxPost.author,
    cardImage: mdxPost.cardImage,
    imageUrl: mdxPost.imageUrl,
    image2Url: mdxPost.image2Url || "",
    excerpt: mdxPost.excerpt,
    featured: mdxPost.featured || false,
    topics: mdxPost.topics,
    intro: [mdxPost.excerpt],
    list: [],
    conclusions: [],
    date: {
      day: dateObj.getDate(),
      month: dateObj.getMonth() + 1,
      year: dateObj.getFullYear(),
    },
  };
}

export default function BlogPage() {
  // Get MDX blog posts
  const mdxBlogs = getAllBlogs();
  const convertedMDXBlogs = mdxBlogs.map(convertMDXToLegacy);

  // Combine with legacy blogs
  const allBlogs = [...convertedMDXBlogs, ...blogs];
  const sortedBlogs = sortByProperty(allBlogs, "title");

  return (
    <div className="mx-auto py-24 sm:py-32 w-11/12">
      <div className="mx-auto">
        <h4>The Pulse of Tech through Your Peers</h4>
        <h1>Hear What Our Community Has to Say about Tech's Latest Updates</h1>
        <p>
          Our community of developers, designers, and digital innovators shares
          firsthand insights on the latest tech trends, tools, and
          transformations shaping the industry. From breakthrough frameworks to
          shifting standards, these perspectives offer practical takeaways,
          honest opinions, and thoughtful analysis. Whether you're staying ahead
          of the curve or validating your next move, explore what the community
          is saying—and join the conversation.
        </p>
        <div className="gap-9 md:gap-12 lg:gap-16 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 mt-10 sm:mt-16">
          {sortedBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
