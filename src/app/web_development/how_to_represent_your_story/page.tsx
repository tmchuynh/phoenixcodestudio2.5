import SplitImageSide from "@/components/headers/page_headers/SplitImageSide";

export default function WhatIsYourStory() {
  return (
    <main className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <SplitImageSide />
      <div className="mx-auto px-4 lg:max-w-none">
        <div className="items-center gap-x-16 gap-y-10 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h2 className="font-bold text-4xl text-gray-900 tracking-tight">
              What is your story?
            </h2>
            <p className="mt-4 text-gray-500">
              Share your unique journey with us and let us help you tell your
              story online.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
