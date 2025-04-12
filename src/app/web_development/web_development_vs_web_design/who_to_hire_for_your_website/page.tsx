import IntroductionImage from "@/components/headers/page_headers/IntroductionImage";

export default function WhoToHireForYourWebsite() {
  return (
    <main className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <IntroductionImage />
      <div className="mx-auto px-4 max-w-2xl lg:max-w-none">
        <div className="items-center gap-x-16 gap-y-10 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h2 className="font-bold text-4xl text-gray-900 tracking-tight">
              Who to Hire for Your Website
            </h2>
            <p className="mt-4 text-gray-500">
              Choosing the right professional for your website is crucial. This
              guide will help you understand the differences between web
              developers and web designers, and how to select the best fit for
              your project.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
