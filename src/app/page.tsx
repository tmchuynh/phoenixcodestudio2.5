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
  type CarouselApi,
} from "@/components/ui/carousel";
import { blogs } from "@/lib/constants/blog-posts";
import { pastProjects } from "@/lib/constants/projects";
import { BlogPost } from "@/lib/interfaces/blogs";
import { Project } from "@/lib/interfaces/projects";
import { featuredArray, sortByProperty } from "@/lib/utils/sort";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [featuredArticles, setFeaturedArticles] = useState<BlogPost[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [apiProject, setApiProject] = useState<CarouselApi>();
  const [currentProject, setCurrentProject] = useState(0);
  const [countProject, setCountProject] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setFeaturedArticles(featuredArray(blogs));
    setFeaturedProjects(featuredArray(pastProjects));
  }, []);

  const sortedFeaturedProjects = sortByProperty(featuredProjects, "title");
  const sortedFeaturedArticles = sortByProperty(featuredArticles, "title");

  useEffect(() => {
    if (!apiProject) {
      return;
    }

    if (!api) {
      return;
    }

    setCountProject(apiProject.scrollSnapList().length);
    setCurrentProject(apiProject.selectedScrollSnap() + 1);

    apiProject.on("select", () => {
      setCurrentProject(apiProject.selectedScrollSnap() + 1);
    });

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [apiProject, api]);

  // Handler for mouse leave to restart autoplay
  const handleMouseLeave = (carousel: CarouselApi) => {
    carousel?.plugins().autoplay?.play();
  };

  return (
    <div className="pt-3 md:pt-5 lg:pt-9">
      <HeaderImageTiles />

      <section>
        <div className="flex items-center gap-2 mx-auto w-10/12">
          <h1 className="whitespace-nowrap">Featured Projects</h1>
          <div className="flex-1 bg-gradient-to-r from-transparent via-fancy to-transparent h-px" />
        </div>

        <div className="space-y-10 md:hidden mx-auto w-10/12">
          {sortedFeaturedProjects.map((project, index) => (
            <FeaturedProject key={index} project={project} index={index} />
          ))}
        </div>

        <Carousel
          setApi={setApiProject}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 8000,
              stopOnMouseEnter: true,
              stopOnInteraction: true,
              stopOnFocusIn: true,
            }),
          ]}
          onMouseLeave={() => handleMouseLeave(apiProject)}
          className="md:block space-y-5 hidden mx-auto w-5/7 xl:w-4/5"
        >
          <CarouselContent className="min-h-full">
            {sortedFeaturedProjects.map((project, index) => (
              <CarouselItem key={index} className="flex items-center px-10">
                <FeaturedProject project={project} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="text-center text-muted-foreground text-sm">
          Project {currentProject} of {countProject}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mx-auto w-10/12">
          <h1 className="whitespace-nowrap">Featured Articles</h1>
          <div className="flex-1 bg-gradient-to-r from-transparent via-fancy to-transparent h-px" />
        </div>

        <div className="space-y-10 md:hidden mx-auto w-11/12">
          {sortedFeaturedArticles.slice(0, 15).map((article, index) => (
            <FeaturedArticles key={index} blog={article} index={index} />
          ))}
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 8000,
              stopOnMouseEnter: true,
              stopOnInteraction: true,
              stopOnFocusIn: true,
            }),
          ]}
          onMouseLeave={() => handleMouseLeave(api)}
          className="md:block hidden mx-auto w-10/12"
        >
          <CarouselContent className="min-h-full">
            {sortedFeaturedArticles.slice(0, 15).map((article, index) => (
              <CarouselItem key={index} className="flex items-center px-10">
                <FeaturedArticles blog={article} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-muted-foreground text-sm">
          Article {current} of {count}
        </div>
      </section>

      <Simple />
    </div>
  );
}
