"use client";

import { Project } from "@/lib/interfaces/projects";
import useSmallScreen from "@/lib/screens/useSmallScreen";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FaCheckDouble } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import DynamicButton from "../button/button-dynamic";
import { Badge } from "../ui/badge";

export function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isSmallScreen = useSmallScreen();
  const router = useRouter();

  return (
    <section
      className={cn("flex flex-col lg:grid grid-cols-5", {
        "border-t py-10": isSmallScreen && index !== 0,
        "pb-10": isSmallScreen && index === 0,
      })}
    >
      <div className="lg:col-span-5 xl:col-span-3">
        <h2 className="underline-offset-4 group-hover:underline decoration-2">
          {project.title}
        </h2>
        <div className="flex flex-wrap items-center gap-4 mt-6">
          {project.tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>
        <p className="md:flex hidden mt-6 text-base/7">{project.description}</p>
      </div>
      <div className="xl:block lg:hidden xl:col-span-2 -mt-2 lg:mt-0 md:p-2 rounded-4xl lg:w-full lg:max-w-lg xl:max-w-none lg:shrink-0">
        {project.short && <p className="mt-6 text-base/7">{project.short}</p>}

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

        <ul
          role="list"
          className="gap-4 sm:gap-6 grid md:grid-cols-2 lg:grid-cols-3 mt-5 text-sm/6"
        >
          {project.tech.languages.map((language, index) => (
            <li key={index} className="flex gap-x-3">
              <FaCheckDouble aria-hidden="true" className="flex-none w-5 h-6" />
              {language}
            </li>
          ))}

          {project.tech.frameworks &&
            project.tech.frameworks.map((framework, index) => (
              <li key={index} className="flex gap-x-3">
                <FaCheckDouble
                  aria-hidden="true"
                  className="flex-none w-5 h-6"
                />
                {framework}
              </li>
            ))}

          {project.tech.libraries &&
            project.tech.libraries.map((library, index) => (
              <li key={index} className="flex gap-x-3">
                <FaCheckDouble
                  aria-hidden="true"
                  className="flex-none w-5 h-6"
                />
                {library}
              </li>
            ))}

          {project.tech.technologies &&
            project.tech.technologies.map((technology, index) => (
              <li key={index} className="flex gap-x-3">
                <FaCheckDouble
                  aria-hidden="true"
                  className="flex-none w-5 h-6"
                />
                {technology}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
