import { ProjectCards } from "@/components/cards/ProjectCards";
import SplitScreenshot from "@/components/headers/page_headers/SplitScreenshot";
import { pastProjects } from "@/lib/constants/projects";

export default function PastProjects() {
  return (
    <>
      <SplitScreenshot />
      <div className="mx-auto pt-3 md:pt-5 lg:pt-9 pb-10 md:pb-12 lg:pb-18 2xl:pb-24 w-11/12">
        <div className="gap-5 grid grid-cols-1 lg:grid-cols-2 py-2 md:py-4 2xl:py-6">
          {pastProjects.map((project, index) => (
            <ProjectCards key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
