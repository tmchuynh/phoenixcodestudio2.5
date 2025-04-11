import Image from "next/image";

export default function IntroductionImage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <h4>
            Deploy faster
          </h4>
          <h1 className="mt-2 font-semibold text-4xl text-pretty sm:text-5xl tracking-tight">
            A better workflow
          </h1>
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mt-10 max-w-xl lg:max-w-none text-base/7">
            <div>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas.
              </p>
            </div>
            <div>
              <p>
                Erat pellentesque dictumst ligula porttitor risus eget et eget.
                Ultricies tellus felis id dignissim eget. Est augue maecenas
                risus nulla ultrices congue nunc tortor.
              </p>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
            </div>
          </div>
          <div className="flex mt-10">
            <a
              href="#"
              className="shadow-xs px-3.5 py-2.5 rounded-md font-semibold text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
      <div className="relative pt-16 lg:pt-20 overflow-hidden">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <Image
            alt=""
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1lZXRpbmd8ZW58MHx8MHx8fDA%3D"
            className="shadow-2xl mb-[-12%] rounded-xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          />
          <div aria-hidden="true" className="relative">
            <div className="bottom-0 absolute -inset-x-20 bg-linear-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
