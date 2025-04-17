"use client";

import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/lib/interfaces/blogs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DynamicButton from "../button/button-dynamic";
import { generateSlug } from "@/lib/utils/format";

export default function BlogCard({ blog }: { blog: BlogPost }) {
  const router = useRouter();

  return (
    <article className="flex flex-col justify-between items-start">
      <div className="relative w-full">
        <Image
          alt={blog.title}
          src={blog.imageUrl || "https://placehold.co/600x400"}
          className="rounded-2xl w-full aspect-video object-cover sm:aspect-2/1 lg:aspect-3/2"
          width={600}
          height={400}
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset" />
      </div>
      <div className="group px-4 max-w-xl h-full">
        <div className="relative flex flex-col justify-between mt-3 h-2/3">
          <h3>{blog.title}</h3>
          <p className="line-clamp-3">{blog.excerpt}</p>
        </div>
        <div className="relative flex items-center gap-x-4 mt-8 pb-2">
          {blog.topics && blog.topics.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blog.topics.sort().map((topic: string, index: number) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="cursor-default"
                >
                  {topic}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <DynamicButton
          className="mx-0 w-full"
          onClick={() => router.push(`/blogs/${generateSlug(blog.title)}`)}
        >
          Read More
        </DynamicButton>
      </div>
    </article>
  );
}
