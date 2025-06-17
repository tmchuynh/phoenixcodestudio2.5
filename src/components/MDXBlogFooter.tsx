"use client";

import DynamicButton from "@/components/button/button-dynamic";
import { useRouter } from "next/navigation";

interface MDXBlogFooterProps {
  topics: string[];
}

export default function MDXBlogFooter({ topics }: MDXBlogFooterProps) {
  const router = useRouter();

  return (
    <footer className="mx-auto xl:mt-0 py-3 md:py-4 lg:py-5 lg:w-3/4 text-center">
      <p className="leading-3">
        Read more related posts about{" "}
        {topics.map((topic, index) => (
          <DynamicButton
            onClick={() => router.push("/blogs")}
            variant={"link"}
            className="m-0 p-0"
            key={index}
          >
            <strong key={index} className="hover:text-tertiary">
              # {topic}{" "}
            </strong>
          </DynamicButton>
        ))}
        .
      </p>
      <p>
        Check out our other posts on our{" "}
        <DynamicButton onClick={() => router.push("/blogs")} variant={"link"}>
          Blog
        </DynamicButton>{" "}
        to stay informed about best practices and emerging trends.
      </p>
    </footer>
  );
}
