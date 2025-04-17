"use client";

import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/lib/interfaces/blogs";
import { generateSlug } from "@/lib/utils/format";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DynamicButton from "../button/button-dynamic";

export default function BlogCard({ blog }: { blog: BlogPost }) {
  const router = useRouter();

  return (
    <Link href={`/blogs/${generateSlug(blog.title)}`} className="group">
      <article className="flex flex-col justify-between items-start">
        <div className="relative w-full">
          <Image
            alt={blog.title}
            src={blog.cardImage || "https://placehold.co/600x400"}
            className="shadow-md rounded-2xl w-full aspect-video object-cover md:aspect-2/1 lg:aspect-3/2"
            width={600}
            height={400}
          />
        </div>
        <div className="group px-4 max-w-xl h-full">
          <div className="relative flex flex-col justify-between mt-3 h-2/3">
            <h3 className="underline-offset-4 group-hover:underline group-hover:decoration-fancy">
              {blog.title}
            </h3>
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
    </Link>
  );
}
