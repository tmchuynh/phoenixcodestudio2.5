"use client";

import Image from "next/image";

export default function OffsetImage() {
  return (
    <div className="mx-auto px-6 lg:px-8 py-32 sm:py-40 max-w-7xl">
      <div className="lg:gap-x-16 lg:gap-y-8 xl:gap-x-8 lg:grid lg:grid-cols-2 xl:grid-cols-1 xl:grid-rows-1 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
        <h1 className="lg:col-span-2 max-w-2xl font-semibold text-5xl text-balance text-gray-900 sm:text-7xl tracking-tight xl:col-auto">
          We’re changing the way people connect
        </h1>
        <div className="xl:col-end-1 xl:row-start-1 mt-6 lg:mt-0 max-w-xl">
          <p className="font-medium text-gray-500 text-lg text-pretty sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
            Qui irure qui lorem cupidatat commodo.
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
