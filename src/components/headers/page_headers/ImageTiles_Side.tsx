import Image from "next/image";

export default function ImageTilesOnSide() {
  return (
    <div className="relative overflow-hidden">
      <div className="pt-16 sm:pt-24 lg:pt-40 pb-80 sm:pb-40 lg:pb-48">
        <div className="relative sm:static mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="sm:max-w-lg">
            <h1 className="font-bold text-4xl sm:text-6xl tracking-tight">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl pointer-events-none"
              >
                <div className="sm:top-0 lg:top-1/2 sm:left-1/2 lg:left-1/2 absolute transform sm:translate-x-8 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="gap-y-6 lg:gap-y-8 grid grid-cols-1 shrink-0">
                      <div className="sm:opacity-0 lg:opacity-100 rounded-lg w-44 h-64 overflow-hidden">
                        <Image
                          alt=""
                          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          className="size-full object-cover"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className="rounded-lg w-44 h-64 overflow-hidden">
                        <Image
                          alt=""
                          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          className="size-full object-cover"
                          width={400}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="gap-y-6 lg:gap-y-8 grid grid-cols-1 shrink-0">
                      <div className="rounded-lg w-44 h-64 overflow-hidden">
                        <Image
                          alt=""
                          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          className="size-full object-cover"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className="rounded-lg w-44 h-64 overflow-hidden">
                        <Image
                          alt=""
                          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          className="size-full object-cover"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className="rounded-lg w-44 h-64 overflow-hidden">
                        <Image
                          alt=""
                          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          className="size-full object-cover"
                          width={400}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="gap-y-6 lg:gap-y-8 grid grid-cols-1 shrink-0">
                      <div className="rounded-lg w-44 h-64 overflow-hidden">
                        <Image
                          alt=""
                          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          className="size-full object-cover"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className="rounded-lg w-44 h-64 overflow-hidden">
                        <Image
                          alt=""
                          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          className="size-full object-cover"
                          width={400}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block px-8 py-3 border border-transparent rounded-md font-medium text-center"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
