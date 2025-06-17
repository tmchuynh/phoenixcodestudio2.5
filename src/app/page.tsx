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
import { pastProjects } from "@/lib/constants/projects";
import { BlogPost, MDXBlogPost } from "@/lib/interfaces/blogs";
import { Project } from "@/lib/interfaces/projects";
import { sortByProperty } from "@/lib/utils/sort";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

// Convert MDX blog post to legacy format for compatibility
function convertMDXToLegacy(mdxPost: MDXBlogPost): BlogPost {
  const dateObj = new Date(mdxPost.date);
  return {
    title: mdxPost.title,
    author: mdxPost.author,
    cardImage: mdxPost.cardImage,
    imageUrl: mdxPost.imageUrl,
    image2Url: mdxPost.image2Url || "",
    excerpt: mdxPost.excerpt,
    featured: mdxPost.featured || false,
    topics: mdxPost.topics,
    intro: [mdxPost.excerpt],
    list: [],
    conclusions: [],
    date: {
      day: dateObj.getDate(),
      month: dateObj.getMonth() + 1,
      year: dateObj.getFullYear(),
    },
  };
}

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
    // Fetch featured blogs from API
    fetch('/api/blogs/featured')
      .then(response => response.json())
      .then(mdxFeaturedBlogs => {
        const convertedFeaturedBlogs = mdxFeaturedBlogs.map(convertMDXToLegacy);
        setFeaturedArticles(convertedFeaturedBlogs);
      })
      .catch(error => {
        console.error('Error fetching featured blogs:', error);
        setFeaturedArticles([]);
      });
    
    setFeaturedProjects(pastProjects.filter(project => project.featured));
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
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Hero Section with elevated spacing */}
      <div className="pt-8 md:pt-16 lg:pt-24 pb-16 md:pb-24">
        <HeaderImageTiles />
      </div>

      {/* Featured Projects Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          {/* Elegant section header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-light text-4xl text-slate-900 md:text-5xl tracking-tight">
              Featured Projects
            </h2>
            <div className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mx-auto w-24 h-0.5"></div>
            <p className="mx-auto mt-6 max-w-2xl font-light text-lg text-slate-600">
              Crafted with precision and excellence
            </p>
          </div>
        </div>

        {/* Mobile view - elevated cards */}
        <div className="space-y-8 md:hidden mx-auto px-6 max-w-sm">
          {sortedFeaturedProjects.map((project, index) => (
            <div key={index}>
              <FeaturedProject project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Desktop carousel with refined styling */}
        <div className="md:block hidden">
          <Carousel
            setApi={setApiProject}
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 10000,
                stopOnMouseEnter: true,
                stopOnInteraction: true,
                stopOnFocusIn: true,
              }),
            ]}
            onMouseLeave={() => handleMouseLeave(apiProject)}
            className="mx-auto px-8 max-w-6xl"
          >
            <CarouselContent className="min-h-full">
              {sortedFeaturedProjects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center items-center px-4"
                >
                  <FeaturedProject project={project} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/90 shadow-lg border-slate-200 hover:border-amber-300 text-slate-700" />
            <CarouselNext className="bg-white/90 shadow-lg border-slate-200 hover:border-amber-300 text-slate-700" />
          </Carousel>

          {/* Refined pagination indicator */}
          <div className="mt-8 text-center">
            <span className="inline-flex items-center bg-slate-100 px-4 py-2 rounded-full font-light text-slate-600 text-sm tracking-wide">
              {currentProject} of {countProject}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-16 md:py-24">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          {/* Elegant section header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-light text-4xl text-slate-900 md:text-5xl tracking-tight">
              Featured Articles
            </h2>
            <div className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mx-auto w-24 h-0.5"></div>
            <p className="mx-auto mt-6 max-w-2xl font-light text-lg text-slate-600">
              Insights and expertise shared
            </p>
          </div>
        </div>

        {/* Mobile view - refined grid */}
        <div className="space-y-6 md:hidden mx-auto px-6 max-w-sm">
          {sortedFeaturedArticles.slice(0, 6).map((article, index) => (
            <div key={index}>
              <FeaturedArticles blog={article} index={index} />
            </div>
          ))}
        </div>

        {/* Desktop carousel with sophisticated styling */}
        <div className="md:block hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 12000,
                stopOnMouseEnter: true,
                stopOnInteraction: true,
                stopOnFocusIn: true,
              }),
            ]}
            onMouseLeave={() => handleMouseLeave(api)}
            className="mx-auto px-8 max-w-6xl"
          >
            <CarouselContent className="min-h-full">
              {sortedFeaturedArticles.slice(0, 12).map((article, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center items-center px-4"
                >
                  <FeaturedArticles blog={article} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/90 shadow-lg border-slate-200 hover:border-amber-300 text-slate-700" />
            <CarouselNext className="bg-white/90 shadow-lg border-slate-200 hover:border-amber-300 text-slate-700" />
          </Carousel>

          {/* Refined pagination indicator */}
          <div className="mt-8 text-center">
            <span className="inline-flex items-center bg-white/70 shadow-sm backdrop-blur-sm px-4 py-2 rounded-full font-light text-slate-600 text-sm tracking-wide">
              {current} of {count}
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section with royal elegance */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 md:py-24">
        <div className="mx-auto px-6 lg:px-8 max-w-4xl">
          <Simple />
        </div>
      </section>
    </div>
  );
}
