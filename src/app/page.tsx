"use client";

import FeaturedArticles from "@/components/cards/FeaturedArticles";
import Simple from "@/components/CTA/Simple";
import HeaderImageTiles from "@/components/headers/page_headers/HeaderImageTiles";
import { blogs } from "@/lib/constants/blog-posts";
import { BlogPost } from "@/lib/interfaces/blogs";
import { featuredArray } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [featuredArticles, setFeaturedArticles] = useState<BlogPost[]>([]);

  useEffect(() => {
    setFeaturedArticles(featuredArray(blogs));
  }, []);
  return (
    <div className="pt-3 md:pt-5 lg:pt-9">
      <HeaderImageTiles />

      <div className="space-y-10 mx-auto w-11/12">
        {featuredArticles.slice(0, 4).map((article, index) => (
          <FeaturedArticles key={index} blog={article} />
        ))}
      </div>

      <Simple />
    </div>
  );
}
