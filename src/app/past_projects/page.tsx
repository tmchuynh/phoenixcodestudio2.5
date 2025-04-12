import SplitScreenshot from "@/components/headers/page_headers/SplitScreenshot";

export default function PastProjects() {
  return (
    <>
      <SplitScreenshot />
      <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
        <h1>Past Projects</h1>
        <p className="mt-4 text-center">
          Here are some of the projects we've worked on in the past.
        </p>
        {/* Add your past projects content here */}
      </div>
    </>
  );
}
