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
    <div className="mx-auto w-11/12">
      <div className="items-start gap-x-8 gap-y-16 sm:gap-y-24 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
        <div className="flex flex-col gap-4">
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
            className="md:block space-y-5 hidden mx-auto w-5/7 xl:w-4/5"
          >
            <CarouselContent className="min-h-full">
              {testimonialImages.map((images, index) => (
                <CarouselItem key={index} className="flex items-center px-10">
                  <div key={index}>
                    <Image
                      src={images.imageUrl}
                      className="rounded-lg max-w-full h-[20em] cursor-pointer object-cover object-center"
                      alt={`gallery-image-${index}`}
                      width={400}
                      height={400}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-end items-center gap-4 mt-4 w-4/5">
            <Button onClick={scrollPrev}>
              <FaChevronLeft />
            </Button>
            <Button onClick={scrollNext}>
              <FaChevronRight />
            </Button>
          </div>
        </div>
        <div>
          <div>
            <h4>Backed by Belief, Guided by Love</h4>
            <h1>Support That Sparked the Journey</h1>
            <div>
              <p className="mt-6">
                Before Phoenix Code Studio had a name, a logo, or even a website
                of its own, it had something far more powerful—people who
                believed in us. What started as small favors for friends and
                passion projects for family quickly evolved into something
                greater, fueled by trust, encouragement, and word-of-mouth
                support. Those early champions didn’t just give us projects—they
                gave us purpose. They believed in our ability to create
                meaningful digital experiences, even before we fully saw it in
                ourselves.
              </p>
              <p className="mt-8">
                Every kind word, referral, and{" "}
                <strong className="uppercase">“You’ve Got This”</strong> became
                fuel. We were inspired by those who saw potential and gave us
                space to grow, make mistakes, and get better. We saw firsthand
                how powerful true support can be—and we carry that same spirit
                into every project. We build with intention, because we know
                what it means when someone chooses you, believes in you, and
                roots for your success.
              </p>
              <p className="mt-8">
                Today, we honor that early support by paying it
                forward—championing small businesses, nonprofits, and
                community-rooted brands with the same heart and dedication that
                got us started. Every collaboration is a continuation of that
                story, and every testimonial is a reflection of the
                relationships we value most. Phoenix Code Studio isn’t just
                about code or design—it’s about people showing up for people,
                and building something real, together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
