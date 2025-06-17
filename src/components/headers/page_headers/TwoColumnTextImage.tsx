"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { testimonialImages } from "@/lib/constants/testimonials";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TwoColumnTextImage() {
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = () => {
    if (api) {
      api.scrollPrev();
    }
  };
  const scrollNext = () => {
    if (api) {
      api.scrollNext();
    }
  };

  return (
    <div className="relative">
      <div className="items-center gap-12 lg:gap-16 grid grid-cols-1 lg:grid-cols-2">
        {/* Image Column */}
        <div className="relative order-2 lg:order-1">
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 9000,
                }),
              ]}
              className="mx-auto lg:mx-0 w-full"
            >
              <CarouselContent className="min-h-full">
                {testimonialImages.map((images, index) => (
                  <CarouselItem key={index} className="flex items-center">
                    <div className="relative w-full">
                      <div className="relative">
                        <Image
                          src={images.imageUrl}
                          className="rounded-2xl w-full h-[400px] transition-transform duration-700 object-cover"
                          alt={`gallery-image-${index}`}
                          width={500}
                          height={400}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center gap-3 mt-6">
              <Button
                onClick={scrollPrev}
                variant="outline"
                size="sm"
                className="hover:bg-blue-50 p-0 border-2 hover:border-blue-300 rounded-full w-10 h-10 transition-colors duration-200"
              >
                <FaChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                onClick={scrollNext}
                variant="outline"
                size="sm"
                className="hover:bg-blue-50 p-0 border-2 hover:border-blue-300 rounded-full w-10 h-10 transition-colors duration-200"
              >
                <FaChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="space-y-8 order-1 lg:order-2">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full font-medium text-red-700 text-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              Our Story
            </div>
            <h1 className="font-bold text-4xl text-gray-900 lg:text-5xl leading-tight">
              Backed by Belief,{" "}
              <span className="bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 text-transparent">
                Guided by Love
              </span>
            </h1>
            <h2 className="mb-6 font-semibold text-2xl text-gray-700">
              Support That Sparked the Journey
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-lg">
              Before Phoenix Code Studio had a name, a logo, or even a website
              of its own, it had something far more powerful—people who believed
              in us. What started as small favors for friends and passion
              projects for family quickly evolved into something greater, fueled
              by trust, encouragement, and word-of-mouth support.
            </p>

            <div className="bg-blue-50 p-6 border-blue-500 border-l-4 rounded-r-lg">
              <p className="text-gray-700 italic">
                Every kind word, referral, and{" "}
                <strong className="font-bold text-blue-700 uppercase">
                  "You've Got This"
                </strong>{" "}
                became fuel. We were inspired by those who saw potential and
                gave us space to grow, make mistakes, and get better.
              </p>
            </div>

            <p>
              Today, we honor that early support by paying it
              forward—championing small businesses, nonprofits, and
              community-rooted brands with the same heart and dedication that
              got us started. Every collaboration is a continuation of that
              story, and every testimonial is a reflection of the relationships
              we value most.
            </p>

            <div className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
              <svg
                className="flex-shrink-0 mt-1 w-6 h-6 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="font-medium text-gray-700">
                Phoenix Code Studio isn't just about code or design—it's about
                people showing up for people, and building something real,
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
