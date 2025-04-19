"use client";

import { testimonialImages } from "@/lib/constants/testimonials";
import Image from "next/image";
import React from "react";

export function FeaturedImageGallery() {
  const [active, setActive] = React.useState(
    "https://img.freepik.com/premium-vector/motivational-quote-black-white-poster-design_525160-7502.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
  );

  return (
    <div className="gap-4 grid">
      <div>
        <Image
          className="rounded-lg w-full max-w-full h-auto md:h-[480px] object-cover object-center"
          src={active}
          alt=""
          width={1470}
          height={980}
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
