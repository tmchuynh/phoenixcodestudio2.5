import Image from "next/image";

export default function SplitScreenshot() {
  return (
    <div className="relative overflow-hidden isolate">
      <svg
        aria-hidden="true"
        className="-z-10 absolute inset-0 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="lg:flex mx-auto px-6 lg:px-8 lg:py-40 pt-10 pb-24 sm:pb-32 w-10/12">
        <div className="mx-auto lg:mx-0 lg:pt-8 max-w-2xl lg:shrink-0">
          <div className="mt-18 md:mt-24 lg:mt-30 xl:mt-48">
            <h1 className="mt-10 font-semibold text-5xl text-pretty sm:text-7xl tracking-tight">
              Explore Our Portfolio of Successful Projects
            </h1>
            <p>
              Discover a showcase of our best work, where innovation meets
              functionality. From custom web designs to high-performance
              applications, our portfolio highlights the expertise, creativity,
              and problem-solving approach we bring to every project. Each case
              study reflects a unique challenge and tailored solution,
              demonstrating our commitment to quality, user experience, and
              client satisfaction. Whether you're looking for inspiration or
              evaluating our capabilities, these projects showcase our ability
              to deliver scalable, efficient, and visually stunning digital
              experiences across industries.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-none mx-auto mt-16 sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 xl:ml-32 max-w-2xl lg:max-w-none">
          <div className="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
            <div className="bg-gray-900/5 -m-2 lg:-m-4 p-2 lg:p-4 rounded-xl lg:rounded-2xl ring-1 ring-gray-900/10 ring-inset">
              <Image
                alt="App screenshot"
                src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
                width={2432}
                height={1442}
                className="shadow-2xl rounded-md ring-1 ring-gray-900/10 w-[76rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
