import BlogCard from "@/components/cards/ArticleCards";
import { blogs } from "@/lib/constants/blog-posts";

export default function BlogPage() {
  return (
    <div className="mx-auto py-24 sm:py-32 w-11/12">
      <div className="mx-auto">
        <h4>The pulse of tech, through your peers</h4>
        <h1>Hear What Our Community Has to Say About Tech's Latest Updates</h1>
        <div className="gap-9 md:gap-12 lg:gap-16 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 mt-10 sm:mt-16">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
