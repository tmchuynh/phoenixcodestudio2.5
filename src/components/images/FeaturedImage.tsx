"use client";

import { testimonialImages } from "@/lib/constants/testimonials";
import Image from "next/image";
import React from "react";

export function FeaturedImageGallery() {
  const [active, setActive] = React.useState(
    "https://plus.unsplash.com/premium_photo-1681505195930-388c317b7a76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VwcG9ydHxlbnwwfDB8MHx8fDA%3D",
  );

  return (
    <div className="gap-4 grid">
      <div>
        <Image
          className="rounded-lg w-full h-auto md:h-[20em] aspect-video object-cover object-center"
          src={active}
          alt=""
          width={1470}
          height={1200}
        />
      </div>
      <div className="gap-4 grid grid-cols-5">
        {testimonialImages.map(({ imageUrl }, index) => (
          <div key={index}>
            <Image
              onClick={() => setActive(imageUrl)}
              src={imageUrl}
              className="rounded-lg max-w-full h-20 cursor-pointer object-cover object-center"
              alt={`gallery-image-${index}`}
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
