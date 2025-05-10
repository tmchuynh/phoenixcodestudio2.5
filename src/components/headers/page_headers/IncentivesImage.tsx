import { incentives } from "@/lib/constants/services/servicesIncentives.tsx";
import Image from "next/image";

export default function IncentivesImage() {
  return (
    <div className="mx-auto py-24 md:py-32">
      <div className="mx-auto px-4">
        <div className="items-center gap-x-16 gap-y-10 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h4>Crafting bold digital experiences with purpose</h4>
            <h1>Digital Solutions With Purpose</h1>
            <p className="mt-4">
              Unlock the full power of your business with tailored digital
              solutions designed to move the needle. From high-performance web
              development to intuitive, user-first design, we create experiences
              that captivate and convert. Every pixel, every line of code, every
              word is crafted with purpose—to elevate your brand and connect
              with your audience.
            </p>
            <p>
              Our approach combines strategy with creativity: sharp content,
              thoughtful storytelling, and digital marketing that cuts through
              the noise. Whether you're launching a bold new idea, reinventing
              your online identity, or expanding into new digital frontiers, we
              build with clarity, precision, and vision.
            </p>
            <p>
              Let’s turn possibilities into performance—and{" "}
              <mark className="bg-primary/20 shadow-sm px-1 py-0.5 rounded-md">
                make your presence impossible to ignore.
              </mark>
            </p>
          </div>
          <Image
            alt=""
            src="https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            className="rounded-lg w-full aspect-3/2 object-cover"
            width={400}
            height={300}
          />
        </div>
        <div className="gap-x-8 gap-y-10 grid grid-cols-1 lg:grid-cols-3 mt-16">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="lg:block sm:flex">
              <div className="w-16 h-16 sm:shrink-0 object-cover">
                {incentive.svg}
              </div>
              <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
                <h4>{incentive.name}</h4>
                <p className="mt-2 text-sm">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
