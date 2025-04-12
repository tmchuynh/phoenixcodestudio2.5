import FeaturedScreenshot from "@/components/headers/page_headers/FeaturedScreenshot";

export default function AboutPCSPage() {
  return (
    <div className="pt-3 md:pt-5 lg:pt-9">
      <FeaturedScreenshot />
      <div className="mx-auto px-6 lg:px-8 py-24 sm:py-32 max-w-7xl">
        <h1>About PCS</h1>
        <p className="mt-6 text-lg leading-8">
          Learn more about our mission, vision, and the values that drive us.
        </p>
      </div>
    </div>
  );
}
