"use client";

import FeaturedArticles from "@/components/cards/FeaturedArticles";
import { FeaturedProject } from "@/components/cards/FeaturedProjects";
import Simple from "@/components/CTA/Simple";
import HeaderImageTiles from "@/components/headers/page_headers/HeaderImageTiles";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blogs } from "@/lib/constants/blog-posts";
import { pastProjects } from "@/lib/constants/projects";
import { Project } from "@/lib/interfaces";
import { BlogPost } from "@/lib/interfaces/blogs";
import { featuredArray } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [featuredArticles, setFeaturedArticles] = useState<BlogPost[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  useEffect(() => {
    setFeaturedArticles(featuredArray(blogs));
    setFeaturedProjects(featuredArray(pastProjects));
  }, []);
  return (
    <div className="pt-3 md:pt-5 lg:pt-9">
      <HeaderImageTiles />

      <div className="space-y-10 md:hidden mx-auto">
        {featuredProjects.slice(0, 4).map((project, index) => (
          <FeaturedProject key={index} project={project} index={index} />
        ))}
      </div>

      <Carousel className="md:block space-y-10 hidden mx-auto w-10/12">
        <CarouselContent className="min-h-full">
          {featuredProjects.slice(0, 4).map((project, index) => (
            <CarouselItem key={index} className="flex items-center px-10 pb-10">
              <FeaturedProject project={project} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Carousel className="md:block space-y-10 hidden mx-auto w-10/12">
        <CarouselContent className="min-h-full">
          {featuredArticles.slice(0, 4).map((article, index) => (
            <CarouselItem key={index} className="flex items-center px-10 pb-10">
              <FeaturedArticles blog={article} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="space-y-10 md:hidden mx-auto w-11/12">
        {featuredArticles.slice(0, 4).map((article, index) => (
          <FeaturedArticles key={index} blog={article} index={index} />
        ))}
      </div>

      <Simple />
    </div>
  );
}
