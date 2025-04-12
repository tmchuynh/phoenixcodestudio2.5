import BentoGridPageHeader from "@/components/headers/page_headers/BentoGridPageHeader";

export default function OurOriginStoryPage() {
  return (
    <div className="pt-3 md:pt-5 lg:pt-9">
      <BentoGridPageHeader />
      <div className="mx-auto px-6 lg:px-8 py-24 sm:py-32 max-w-7xl">
        <h1>Our Origin Story</h1>
        <p className="mt-6 text-gray-600 text-lg leading-8">
          Discover the journey that led us to create our app, and how it has
          evolved to meet the needs of our users.
        </p>
      </div>
    </div>
  );
}
