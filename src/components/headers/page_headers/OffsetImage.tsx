"use client";

import Image from "next/image";

export default function OffsetImage() {
  return (
    <div className="mx-auto px-6 lg:px-8 py-32 sm:py-40 w-11/12">
      <div className="lg:gap-x-16 lg:gap-y-8 xl:gap-x-8 lg:grid lg:grid-cols-2 xl:grid-cols-1 xl:grid-rows-1 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
        <h1 className="lg:col-span-2 max-w-2xl xl:col-auto">
          We’re changing the way people connect
        </h1>
        <div className="xl:col-end-1 xl:row-start-1 mt-6 lg:mt-0 max-w-xl">
          <p>
            Brand storytelling is the art of using narratives to communicate
            your brand’s values, mission, and message in a way that resonates
            emotionally with your audience. It’s about crafting a story that
            goes beyond what you sell, touching on why you exist and how your
            brand makes a difference in the world.
          </p>
          <p>
            But how do you create a compelling story for your brand? What makes
            a good brand story, and how can you use it to build a loyal customer
            base? The answer lies in understanding your audience, defining your
            brand’s identity, and crafting a story that speaks to the hearts and
            minds of your customers. By sharing a story that resonates
            emotionally and authentically, you can create lasting connections
            and inspire customer loyalty.
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
