"use client";
import { BlogPost } from "@/lib/interfaces/blogs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DynamicButton from "../button/button-dynamic";

export default function FeaturedArticles({ blog }: { blog: BlogPost }) {
  const router = useRouter();

  return (
    <section className="items-center gap-3 md:gap-4 lg:gap-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-7">
      <Image
        src={"https://placehold.co/600x400"}
        alt=""
        className="md:col-span-2 lg:col-span-3 rounded-2xl w-full object-cover"
        width={600}
        height={400}
      />

      <div className="flex flex-col justify-between md:col-span-1 lg:col-span-3 2xl:col-span-4">
        <h1>{blog.title}</h1>

        <p className="max-w-5xl line-clamp-6">{blog.intro}</p>

        <DynamicButton className="mx-0 w-1/2">Read More</DynamicButton>
      </div>
    </section>
  );
}
