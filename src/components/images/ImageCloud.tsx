import Image from "next/image";

export default function Example() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <h2 className="text-center text-lg/8 font-semibold<Image">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="items-center gap-x-8 gap-y-10 sm:gap-x-10 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-5 mx-auto lg:mx-0 mt-10 max-w-lg sm:max-w-xl lg:max-w-none">
          <Image
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
          />
          <Image
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
          />
          <Image
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
          />
          <Image
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 lg:col-span-1 sm:col-start-2 w-full max-h-12 object-contain"
          />
          <Image
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 lg:col-span-1 col-start-2 sm:col-start-auto w-full max-h-12 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
