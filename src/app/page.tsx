import Image from "next/image";

const stats = [
  { id: 1, name: "Creators on the platform", value: "8,000+" },
  { id: 2, name: "Flat platform fee", value: "3%" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
  { id: 4, name: "Paid out to creators", value: "$70M" },
];

export default function Example() {
  return (
    <div className="relative">
      <Image
        alt=""
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
        className="lg:left-0 lg:absolute lg:inset-y-0 w-full lg:w-1/2 h-56 lg:h-full object-cover"
        width={500}
        height={500}
      />
      <div className="grid lg:grid-cols-2 mx-auto max-w-7xl">
        <div className="lg:col-start-2 px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-32 pb-24 sm:pb-32">
          <div className="mx-auto lg:mr-0 max-w-2xl lg:max-w-lg">
            <p className="font-semibold text-base/8">Our track record</p>
            <h1 className="">Trusted by thousands of creators worldwide</h1>
            <h2>Sunt nostrud cillum tempor</h2>
            <h3>aliquip irure Lorem velit magna laborum.</h3>
            <p className="ext-lg/8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
            <dl className="gap-8 grid grid-cols-1 sm:grid-cols-2 mt-16 sm:mt-20 xl:mt-16 max-w-xl">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col gap-y-3 pl-6 border-gray-900/10 border-l"
                >
                  <dt className="text-sm/6">{stat.name}</dt>
                  <dd className="order-first font-semibold text-3xl tracking-tight">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
