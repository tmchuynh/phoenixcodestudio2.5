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
    name: "Customer Support",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-support-simple.svg",
    description:
      "Our dedicated support team is here to assist you 24/7 with any inquiries or issues.",
  },
  {
    name: "Secure Payment",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-payment-simple.svg",
    description:
      "We ensure that your payment information is secure and protected at all times.",
  },
];

export default function IncentivesImage() {
  return (
    <div className="mx-auto py-24 md:py-32">
      <div className="mx-auto px-4">
        <div className="items-center gap-x-16 gap-y-10 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1>Digital Services by Phoenix Code Studio</h1>
            <p className="mt-4">
              Unlock your business’s full potential with our all-embracing
              digital solutions. From cutting-edge web development that delivers
              high-performance websites to intuitive design that enhances user
              experience, we craft strategies that make an impact. Our expertise
              in content creation and digital marketing ensures your brand
              stands out, driving engagement, increasing visibility, and
              boosting conversions. Whether you're launching a new venture,
              reimagining your online presence, or expanding into new markets,
              we provide tailored solutions that align with your vision and set
              you apart in today’s competitive digital landscape.
            </p>
          </div>
          <Image
            alt=""
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/incentives-07-hero.jpg"
            className="rounded-lg w-full aspect-3/2 object-cover"
            width={400}
            height={300}
          />
        </div>
        <div className="gap-x-8 gap-y-10 grid grid-cols-1 lg:grid-cols-3 mt-16">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="lg:block sm:flex">
              <div className="sm:shrink-0">
                <Image
                  alt=""
                  src={incentive.imageSrc}
                  width={64}
                  height={64}
                  className="size-16"
                />
              </div>
              <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
                <h3 className="font-medium text-gray-900 text-sm">
                  {incentive.name}
                </h3>
                <p className="mt-2 text-sm">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
