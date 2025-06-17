import { Badge } from "@/components/ui/badge";
import { MDXBlogPost } from "@/lib/interfaces/blogs";
import { convertToDate } from "@/lib/utils/convert";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import MDXBlogFooter from "./MDXBlogFooter";

interface MDXBlogRendererProps {
  post: MDXBlogPost;
}

// Server component for rendering MDX content
export default async function MDXBlogRenderer({ post }: MDXBlogRendererProps) {
  // Convert date string to the format expected by convertToDate
  const dateObj = new Date(post.date);
  const formattedDate = convertToDate({
    day: dateObj.getDate(),
    month: dateObj.getMonth() + 1,
    year: dateObj.getFullYear(),
  });

  return (
    <div className="mx-auto py-6 w-10/12 md:w-11/12">
      <header>
        <h1>{post.title}</h1>

        <section>
          <div className="flex md:flex-row-reverse flex-col md:justify-between items-center gap-6">
            <div className="flex flex-wrap justify-end gap-2 w-fit">
              {post.topics.map((topic: string, index: number) => {
                return (
                  <Badge
                    variant={"secondary"}
                    className="text-sm lowercase cursor-default"
                    key={index}
                  >
                    #&thinsp;{topic}
                  </Badge>
                );
              })}
            </div>
            {post.date && (
              <p>
                <strong>Date: </strong>
                {formattedDate}
              </p>
            )}
          </div>

          <div className="xl:flex xl:flex-col xl:justify-between">
            <div>
              <p>{post.excerpt}</p>
            </div>
          </div>
        </section>

        <div className="my-8">
          <Image
            src={post.imageUrl}
            width={1200}
            height={800}
            priority={true}
            alt={`${post.title}-Main-Image`}
            className="shadow-lg mx-auto rounded-2xl w-10/12 h-full aspect-video object-cover object-center"
          />
        </div>
      </header>

      {/* Render MDX Content */}
      <article className="max-w-none prose-headings:text-foreground prose-li:text-foreground prose-p:text-foreground prose-strong:text-foreground prose prose-lg">
        <MDXRemote source={post.content} />
      </article>

      <MDXBlogFooter topics={post.topics} />
    </div>
  );
}
