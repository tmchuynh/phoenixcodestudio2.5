import Image from "next/image";

const incentives = [
  {
    name: "Free shipping",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "10-year warranty",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: "Exchanges",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto sm:px-2 lg:px-4 py-24 sm:py-32 max-w-7xl">
        <div className="mx-auto px-4 max-w-2xl lg:max-w-none">
          <div className="items-center gap-x-16 gap-y-10 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="font-bold text-4xl text-gray-900 tracking-tight">
                We built our business on great customer service
              </h2>
              <p className="mt-4 text-gray-500">
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
          <div className="gap-x-8 gap-y-10 grid grid-cols-1 lg:grid-cols-3 mt-16">
            {incentives.map( ( incentive ) => (
              <div key={incentive.name} className="lg:block sm:flex">
                <div className="sm:shrink-0">
                  <Image alt="" src={incentive.imageSrc}
                    width={64}
                    height={64}
                    className="size-16"
                  />
                </div>
                <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
                  <h3 className="font-medium text-gray-900 text-sm">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-gray-500 text-sm">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ) )}
          </div>
        </div>
      </div>
    </div>
  );
}
