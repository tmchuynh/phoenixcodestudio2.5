import Image from "next/image";

export default function LetsWorkTogether() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto sm:px-2 lg:px-4 py-24 sm:py-32 max-w-7xl">
        <div className="mx-auto px-4 lg:max-w-none">
          <div className="items-center gap-x-16 gap-y-10 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="font-bold text-4xl text-gray-900 tracking-tight">
                We built our business on great customer service
              </h2>
              <h1>Your Success is Our Priority</h1>
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
        </div>
      </div>
    </div>
  );
}
