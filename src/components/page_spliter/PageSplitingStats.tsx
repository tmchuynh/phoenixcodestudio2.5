import Image from "next/image";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function PageSplitingStats() {
  return (
    <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden isolate">
      <Image
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="object-right -z-10 absolute inset-0 size-full object-cover md:object-center"
        width={2432}
        height={1442}
      />
      <div
        aria-hidden="true"
        className="sm:block sm:-top-10 sm:right-1/2 sm:-z-10 sm:absolute hidden sm:blur-3xl sm:mr-10 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20 w-[68.5625rem] aspect-1097/845"
        />
      </div>
      <div
        aria-hidden="true"
        className="-top-52 sm:top-[-28rem] left-1/2 -z-10 absolute blur-3xl sm:ml-16 transform-gpu sm:transform-gpu -translate-x-1/2 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20 w-[68.5625rem] aspect-1097/845"
        />
      </div>
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto lg:mx-0 max-w-2xl">
          <h2 className="font-semibold text-5xl text-white sm:text-7xl tracking-tight">
            Work with us
          </h2>
          <p className="mt-8 font-medium text-gray-300 text-lg text-pretty sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
        </div>
        <div className="mx-auto lg:mx-0 mt-10 max-w-2xl lg:max-w-none">
          <div className="md:flex gap-x-8 gap-y-6 lg:gap-x-10 grid grid-cols-1 sm:grid-cols-2 font-semibold text-base/7 text-white">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16 sm:mt-20">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="font-semibold text-4xl text-white tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
