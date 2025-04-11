import Image from "next/image";

export default function FeaturedCategory() {
  return (
    <section aria-labelledby="featured-heading" className="relative mt-16 rounded-lg lg:h-96 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          alt=""
          src="https://plus.unsplash.com/premium_photo-1664297844174-d7dfb8d0e7f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZSUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          className="size-full object-cover"
          width={1600}
          height={900}
          priority
        />
      </div>
      <div aria-hidden="true" className="relative lg:hidden w-full h-96" />
      <div aria-hidden="true" className="relative lg:hidden w-full h-32" />
      <div className="bottom-0 absolute inset-x-0 lg:inset-x-auto lg:inset-y-0 sm:flex lg:flex-col sm:justify-between sm:items-center lg:items-start bg-black/75 backdrop-blur-sm backdrop-filter p-6 lg:rounded-tl-lg rounded-bl-lg rounded-br-lg lg:rounded-br-none lg:w-96">
        <div>
          <h2 id="featured-heading" className="font-bold text-white text-xl">
            Workspace Collection
          </h2>
          <p className="mt-1 text-gray-300 text-sm">
            Upgrade your desk with objects that keep you organized and clear-minded.
          </p>
        </div>
        <a
          href="#"
          className="flex justify-center items-center hover:bg-white/10 mt-6 sm:mt-0 sm:ml-8 lg:ml-0 px-4 py-3 border border-white/25 rounded-md lg:w-full font-medium text-base text-white shrink-0"
        >
          View the collection
        </a>
      </div>
    </section>
  );
}