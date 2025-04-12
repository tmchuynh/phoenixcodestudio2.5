import ImageTilesOnSide from "@/components/headers/page_headers/ImageTilesOnSide";

export default function WhoAreYou() {
  return (
    <main className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <ImageTilesOnSide />
      <div className="mx-auto px-4 max-w-2xl lg:max-w-none">
        <div className="items-center gap-x-16 gap-y-10 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h2 className="font-bold text-4xl text-gray-900 tracking-tight">
              Who are you?
            </h2>
            <p className="mt-4 text-gray-500">
              We want to know more about you and your business. Share your story
              with us and let us help you tell it online.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
