"use client";

import Image from "next/image";

export default function OffsetImage() {
  return (
    <div className="mx-auto px-6 lg:px-8 py-32 sm:py-40 w-11/12">
      <div className="lg:gap-x-16 lg:gap-y-8 xl:gap-x-8 lg:grid lg:grid-cols-2 xl:grid-cols-1 xl:grid-rows-1 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
        <div className="lg:col-span-2 max-w-2xl xl:col-auto">
          <h4>From Identity to Impact</h4>
          <h1>Crafting Narratives That Build Brands</h1>
        </div>
        <div className="xl:col-end-1 xl:row-start-1 mt-6 lg:mt-0 max-w-xl">
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
          src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
          className="xl:row-span-2 xl:row-end-2 mt-10 sm:mt-16 lg:mt-0 xl:mt-36 rounded-2xl w-full max-w-lg lg:max-w-none aspect-6/5 object-cover"
          width={2432}
          height={1442}
        />
      </div>
    </div>
  );
}
