import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Example() {
  return (
    <div className="relative bg-white py-24 sm:py-32 overflow-hidden isolate">
      <div
        aria-hidden="true"
        className="-top-80 md:top-20 xl:top-3 left-[max(6rem,33%)] sm:left-1/2 -z-10 absolute blur-3xl lg:ml-20 xl:ml-56 transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
          }}
          className="bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-[50.0625rem] aspect-801/1036"
        />
      </div>
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto lg:mx-0 max-w-2xl">
          <p className="font-semibold text-base/7 text-indigo-600">
            Deploy faster
          </p>
          <h1 className="mt-2 font-semibold text-4xl text-gray-900 text-pretty sm:text-5xl tracking-tight">
            A better workflow
          </h1>
          <p className="mt-6 text-gray-700 text-xl/8">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
            arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
            feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
            Eleifend egestas fringilla sapien.
          </p>
        </div>
        <div className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-12 mx-auto lg:mx-0 mt-16 lg:mt-10 max-w-2xl lg:max-w-none">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              aria-hidden="true"
              className="-top-[40rem] left-1 -z-10 absolute w-[175.5rem] h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)] stroke-gray-900/10"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect
                fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>
            <figure className="pl-8 border-indigo-600 border-l">
              <blockquote className="font-semibold text-gray-900 text-xl/8 tracking-tight">
                <p>
                  “Vel ultricies morbi odio facilisi ultrices accumsan donec
                  lacus purus. Lectus nibh ullamcorper ac dictum justo in
                  euismod. Risus aenean ut elit massa. In amet aliquet eget
                  cras. Sem volutpat enim tristique.”
                </p>
              </blockquote>
              <figcaption className="flex gap-x-4 mt-8">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="flex-none bg-gray-50 mt-1 rounded-full size-10"
                  width={400}
                  height={300}
                />
                <div className="text-sm/6">
                  <div className="font-semibold text-gray-900">
                    Brenna Goyette
                  </div>
                  <div className="text-gray-600">@brenna</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="lg:col-span-7 max-w-xl text-base/7 text-gray-700">
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit. Faucibus commodo massa rhoncus, volutpat.
              Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
              sed turpis id.
            </p>
            <ul role="list" className="space-y-8 mt-8 max-w-xl text-gray-600">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon
                  aria-hidden="true"
                  className="flex-none mt-1 text-indigo-600 size-5"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Push to deploy.
                  </strong>{" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon
                  aria-hidden="true"
                  className="flex-none mt-1 text-indigo-600 size-5"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    SSL certificates.
                  </strong>{" "}
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  aria-hidden="true"
                  className="flex-none mt-1 text-indigo-600 size-5"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Database backups.
                  </strong>{" "}
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
              odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
              diam tincidunt ac cursus in vel. Mauris varius vulputate et
              ultrices hac adipiscing egestas. Iaculis convallis ac tempor et
              ut. Ac lorem vel integer orci.
            </p>
            <h2 className="mt-16 font-bold text-2xl text-gray-900 tracking-tight">
              No server? No problem.
            </h2>
            <p className="mt-6">
              Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
              consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
              vitae interdum mauris enim, consequat vulputate nibh. Maecenas
              pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim
              cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
              ipsum eu a sed convallis diam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
