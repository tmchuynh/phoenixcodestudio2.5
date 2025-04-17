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
      <div className="z-20">
        <Image
          className="shadow-lg rounded-2xl w-full max-w-full h-auto md:h-[35em] object-cover object-center"
          src={active}
          alt="active-gallery-image"
          width={1470}
          height={980}
        />
      </div>
      <div className="gap-4 lg:gap-6 grid grid-cols-3 lg:grid-cols-5 lg:-mt-4 lg:w-11/12">
        {testimonialImages.map(({ imageUrl }, index) => (
          <div key={index}>
            <Image
              onClick={() => setActive(imageUrl)}
              src={imageUrl}
              className="shadow-md rounded-lg max-w-full h-14 md:h-28 lg:h-20 transform transition duration-300 cursor-pointer lg:rotate-[35deg] object-cover object-center hover:rotate-[60deg]"
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
