"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import DynamicButton from "../button/button-dynamic";

export default function GlassTwoColumn() {
  const router = useRouter();
  return (
    <div className="mx-auto sm:px-6 lg:px-8">
      <div className="flex lg:flex-row flex-col lg:items-center gap-16 xl:gap-x-20 mx-auto lg:mx-0 px-6 xl:px-20 sm:p-8">
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          className="flex-none shadow-xl rounded-2xl w-full lg:max-w-lg h-96 lg:h-auto object-cover lg:aspect-square"
          width={800}
          height={800}
        />
        <div className="flex-auto w-full">
          <h4>We're Here Every Step of The Way</h4>
          <h2>Your First Step Is Always The Hardest</h2>
          <p className="mt-6 text-lg/8 text-pretty">
            Your brand isn't just another template—it’s a story waiting to be
            told. That’s why we craft tailored, industry-aware solutions
            designed to reflect your voice, goals, and values. From our first
            conversation to final delivery, we walk with you, building something
            meaningful every step of the way.
          </p>
          <div className="flex mt-10">
            <DynamicButton
              variant={"secondary"}
              className="mx-0 w-2/3"
              onClick={() => router.push("/services")}
            >
              Your Dream Awaits
            </DynamicButton>
          </div>
        </div>
      </div>
    </div>
  );
}
