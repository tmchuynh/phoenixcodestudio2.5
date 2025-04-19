"use client";
import { BlogPost } from "@/lib/interfaces/blogs";
import useSmallScreen from "@/lib/screens/useSmallScreen";
import { cn } from "@/lib/utils";
import { convertToDate } from "@/lib/utils/convert";
import { generateSlug } from "@/lib/utils/format";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DynamicButton from "../button/button-dynamic";

export default function FeaturedArticles({
  blog,
  index,
}: {
  blog: BlogPost;
  index: number;
}) {
  const router = useRouter();
  const isSmallScreen = useSmallScreen();

  return (
    <Link href={`/blogs/${generateSlug(blog.title)}`} className="group">
      <section
        className={cn(
          "flex flex-col-reverse md:flex-col items-center gap-3 md:gap-4 lg:gap-10 lg:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-7 mx-2 md:mx-0",
          {
            "border-t py-10": isSmallScreen && index !== 0,
            "pb-10": isSmallScreen && index === 0,
          }
        )}
      >
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          className="md:col-span-1 lg:col-span-3 rounded-2xl w-full h-full object-cover"
          width={600}
          height={400}
        />

        <div className="flex flex-col justify-between md:col-span-2 lg:col-span-3 2xl:col-span-4 py-2 h-full">
          <h4>{convertToDate(blog.date)}</h4>
          <h2 className="underline-offset-4 group-hover:underline decoration-2">
            {blog.title}
          </h2>

          <p className="max-w-5xl line-clamp-6">{blog.intro}</p>

          <DynamicButton
            variant={"tertiaryOutline"}
            className="mx-0 w-2/3"
            onClick={() => router.push(`/blogs/${generateSlug(blog.title)}`)}
          >
            Read More
          </DynamicButton>
        </div>
      </section>
    </Link>
  );
}
