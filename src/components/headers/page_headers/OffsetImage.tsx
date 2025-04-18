"use client";

import Image from "next/image";

export default function OffsetImage() {
  return (
    <div className="mx-auto lg:px-8 pt-24 md:pt-18 xl:pt-36 w-10/12 md:w-11/12">
      <div className="lg:gap-x-16 lg:gap-y-8 xl:gap-x-12 lg:grid lg:grid-cols-2 xl:grid-cols-1 xl:grid-rows-1 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
        <div className="relative flex flex-col lg:col-end-3 lg:row-start-1 lg:row-end-2 max-w-xl xl:col-auto">
          <div>
            <h4>From Identity to Impact</h4>
            <h1>Crafting Narratives That Build Brands</h1>
          </div>
          <p>
            Brand storytelling is the strategic craft of using narrative to
            express your brand’s values, mission, and purpose in a way that
            emotionally connects with your audience. It goes beyond products or
            services—it's about sharing why your brand exists and the impact it
            aims to make.
          </p>
          <p>
            So, how do you shape a story that truly resonates? What defines a
            powerful brand narrative, and how can it cultivate lasting customer
            loyalty? It starts with knowing your audience, clearly defining your
            brand identity, and crafting a story that authentically reflects
            both. When done right, brand storytelling builds meaningful
            connections—fostering trust, inspiring engagement, and turning
            customers into advocates.
          </p>
        </div>
        <Image
          alt=""
          src="https://img.freepik.com/premium-photo/brand-identity-business-marketing-words-typography-concept_21336-13298.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740&h=500"
          className="xl:row-span-2 xl:row-end-2 mt-10 lg:mt-0 rounded-2xl w-full max-w-lg lg:max-w-7xl place-self-end xl:place-self-start aspect-8/7 object-cover"
          width={2432}
          height={1442}
        />
      </div>
    </div>
  );
}
