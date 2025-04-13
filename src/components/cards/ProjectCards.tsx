"use client";

import { Project } from "@/lib/interfaces";
import { useRouter } from "next/navigation";
import { FaCheckDouble } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import DynamicButton from "../button/button-dynamic";

export function ProjectCards({ project }: { project: Project }) {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between shadow-md p-8 sm:p-10 rounded-3xl ring-1">
      <div>
        <h4>{project.short}</h4>
        <h2>{project.title}</h2>
        <p className="mt-6 text-base/7">{project.quote}</p>
        <ul role="list" className="space-y-4 mt-10 text-sm/6">
          {project.tech.languages.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <FaCheckDouble aria-hidden="true" className="flex-none w-5 h-6" />
              {feature}
            </li>
          ))}

          {project.tech.frameworks?.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <FaCheckDouble aria-hidden="true" className="flex-none w-5 h-6" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex md:flex-row xl:flex-row flex-col lg:flex-col gap-4 lg:gap-2 xl:gap-3 pt-4">
        {project.githubLink && (
          <DynamicButton
            variant={"tertiaryOutline"}
            onClick={() => router.push(project.githubLink || "")}
            icon={TbBrandGithubFilled}
            className="w-full md:w-1/2"
          >
            GitHub
          </DynamicButton>
        )}
        {project.liveLink && (
          <DynamicButton
            variant={"secondaryOutline"}
            onClick={() => router.push(project.liveLink || "")}
            className="w-full md:w-1/2"
          >
            View Project Live
          </DynamicButton>
        )}
      </div>
    </div>
  );
}
