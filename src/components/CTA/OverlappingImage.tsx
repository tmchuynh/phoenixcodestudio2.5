"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import DynamicButton from "../button/button-dynamic";

export default function OverlappingImage() {
  const router = useRouter();
  return (
    <div className="relative py-16">
      <div className="lg:bg-transparent mx-auto lg:px-8 max-w-7xl">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div className="mx-auto px-6 lg:p-0 max-w-5xl md:max-w-4xl lg:max-w-none h-full">
              <Image
                alt=""
                src="https://img.freepik.com/premium-photo/start-up-business-invention-solution_53876-9514.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                className="relative shadow-2xl rounded-3xl w-full h-full object-cover"
                width={1200}
                height={600}
              />
            </div>
          </div>

          <div className="relative lg:items-center lg:grid lg:grid-cols-10 lg:col-span-10 lg:col-start-3 lg:row-start-1 bg-muted lg:rounded-3xl">
            <div
              aria-hidden="true"
              className="lg:block absolute inset-0 hidden rounded-3xl overflow-hidden"
            >
              <svg
                fill="none"
                width={404}
                height={384}
                viewBox="0 0 404 384"
                aria-hidden="true"
                className="xl:top-0 bottom-full xl:bottom-auto left-full absolute opacity-15 transform -translate-x-2/3 translate-y-1/3 xl:translate-y-0 -rotate-3"
              >
                <defs>
                  <pattern
                    x={0}
                    y={0}
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      fill="currentColor"
                      width={4}
                      height={4}
                      className="text-fancy"
                    />
                  </pattern>
                </defs>
                <rect
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  width={404}
                  height={384}
                />
              </svg>
              <svg
                fill="none"
                width={404}
                height={384}
                viewBox="0 0 404 384"
                aria-hidden="true"
                className="top-full absolute opacity-25 transform -translate-x-1/3 -translate-y-1/3 xl:-translate-y-1/2 rotate-6"
              >
                <defs>
                  <pattern
                    x={0}
                    y={0}
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      fill="currentColor"
                      width={4}
                      height={4}
                      className="text-indigo-500"
                    />
                  </pattern>
                </defs>
                <rect
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  width={404}
                  height={384}
                />
              </svg>
            </div>
            <div className="relative space-y-6 lg:col-span-6 lg:col-start-4 mx-auto px-6 py-12 md:py-18 p-0 max-w-md md:max-w-3xl lg:max-w-none">
              <h1>Bring Your Vision to Life</h1>
              <p>
                Whether you’re starting fresh, redefining your brand, or scaling
                to new heights, Phoenix Code Studio is here to help you stand
                out. Let’s work together to create a digital experience that
                reflects your unique identity and delivers real results.
              </p>
              <DynamicButton
                className="mx-0"
                onClick={() => router.push("/get_in_touch/lets_work_together")}
              >
                Your Dream Awaits
              </DynamicButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
