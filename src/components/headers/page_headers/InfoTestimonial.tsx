import { testimonials } from "@/lib/constants/testimonials";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function InfoTestimonial() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden isolate">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 max-w-2xl">
          <h4>Let's Make Vision Reality</h4>
          <h1>How We Can Help You Succeed</h1>
          <p>
            At Phoenix Code Studio, we believe that every brand has a unique
            story to tell. Our mission is to help you tell that story through
            innovative web design, branding, and digital marketing solutions.
            Whether you’re a startup looking to establish your online presence
            or an established business seeking to revamp your digital strategy,
            we’re here to guide you every step of the way.
          </p>
          <p>
            Every project at Phoenix Code Studio is a step toward building
            something bigger—lasting partnerships, empowered communities, and a
            digital ecosystem where every brand has the tools to succeed. We
            don’t just envision a better digital future—we build it.
          </p>
        </div>
        <div className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-12 mx-auto lg:mx-0 mt-16 lg:mt-10 max-w-2xl lg:max-w-none">
          <div className="relative lg:order-last lg:col-span-4">
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
            <figure className="pl-8">
              <blockquote className="font-semibold text-xl/8 tracking-tight">
                {testimonials[2].quote}
              </blockquote>
              <figcaption className="flex gap-x-4 mt-8">
                <div className="text-sm/6">
                  <div className="font-semibold"> {testimonials[2].name}</div>
                  <div className=""> {testimonials[2].position}</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="lg:col-span-7 max-w-xl">
            <p>
              At Phoenix Code Studio, our mission is simple—help your brand
              rise, evolve, and thrive through purposeful digital
              transformation. Whether you're an entrepreneur launching your
              first venture or a growing company ready to reimagine your online
              presence, we provide the tools, strategy, and creativity you need
              to move forward with confidence.
            </p>
            <ul role="list" className="space-y-8 mt-8 max-w-xl">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon
                  aria-hidden="true"
                  className="flex-none mt-1 size-5"
                />
                <span>Custom Website Development</span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon
                  aria-hidden="true"
                  className="flex-none mt-1 size-5"
                />
                <span>Brand Strategy & Identity</span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  aria-hidden="true"
                  className="flex-none mt-1 size-5"
                />
                <span>Website Redesigns & Revitalization</span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  aria-hidden="true"
                  className="flex-none mt-1 size-5"
                />
                <span>SEO, Content, & Marketing Strategy</span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  aria-hidden="true"
                  className="flex-none mt-1 size-5"
                />
                <span>Ongoing Support & Digital Growth</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
