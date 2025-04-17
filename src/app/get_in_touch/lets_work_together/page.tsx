import { testimonials } from "@/lib/constants/testimonials";
import Image from "next/image";

export default function LetsWorkTogether() {
  return (
    <div>
      <div className="mx-auto py-24 sm:py-32 max-w-7xl">
        <div className="mx-auto px-4 lg:max-w-none">
          <div className="items-center gap-x-16 gap-y-10 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="font-bold text-4xl tracking-tight">
                We built our business on great customer service
              </h2>
              <h1>Your Success is Our Priority</h1>
              <p className="mt-4">
                At the beginning at least, but then we realized we could make a
                lot more money if we kinda stopped caring about that. Our new
                strategy is to write a bunch of things that look really good in
                the headlines, then clarify in the small print but hope people
                don't actually read it.
              </p>
            </div>
            <Image
              alt=""
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/incentives-07-hero.jpg"
              className="bg-gray-100 rounded-lg w-full aspect-3/2 object-cover"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
      <svg
        aria-hidden="true"
        className="-z-10 absolute inset-0 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-64}
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto py-8 md:py-12 lg:py-24 2xl:py-30 max-w-3xl lg:max-w-7xl">
        <h2>Let’s Talk About Your Project</h2>
        <p className="max-w-4xl">
          At first, we were all about helping people build meaningful brand
          guidelines. Then we figured—why not just toss around some buzzwords,
          slap on a cool font, and call it strategy? But hey, if you actually
          want something thoughtful and tailored… we still know how to do that
          too. Probably.
        </p>
        <div className="gap-5 lg:gap-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-9">
          <form
            action="#"
            method="POST"
            className="lg:flex-auto md:col-span-2 lg:col-span-2 2xl:col-span-5"
          >
            <div className="gap-x-8 gap-y-6 grid grid-cols-1 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block font-semibold text-sm/6"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block bg-white px-3.5 py-2 rounded-md w-full text-base placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block font-semibold text-sm/6"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block bg-white px-3.5 py-2 rounded-md w-full text-base placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block font-semibold text-sm/6"
                >
                  Budget
                </label>
                <div className="mt-2.5">
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    className="block bg-white px-3.5 py-2 rounded-md w-full text-base placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="block font-semibold text-sm/6"
                >
                  Website
                </label>
                <div className="mt-2.5">
                  <input
                    id="website"
                    name="website"
                    type="url"
                    className="block bg-white px-3.5 py-2 rounded-md w-full text-base placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block font-semibold text-sm/6"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block bg-white px-3.5 py-2 rounded-md w-full text-base placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="lg:flex-none lg:col-span-2 2xl:col-span-4 lg:mt-6">
            <figure className="mt-10">
              <blockquote className="font-semibold text-xl/8 tracking-tight">
                {testimonials[3].quote}
              </blockquote>
              <figcaption className="flex gap-x-4 mt-8">
                <div className="text-sm/6">
                  <div className="font-semibold"> {testimonials[3].name}</div>
                  <div> {testimonials[3].position}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
