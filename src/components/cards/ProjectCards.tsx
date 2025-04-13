"use client";

import { Project } from "@/lib/interfaces";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TbBrandGithubFilled } from "react-icons/tb";
import DynamicButton from "../button/button-dynamic";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function ProjectCards({ project }: { project: Project }) {
  const router = useRouter();
  return (
    <Card className="flex flex-col justify-between lg:justify-normal px-8 py-9">
      <CardHeader className="relative md:flex hidden md:h-[20em] 2xl:h-96">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="rounded-2xl w-full h-full object-cover object-center"
          priority
        />
      </CardHeader>
      <CardContent className="flex flex-col justify-between items-start h-full md:h-1/2">
        <div>
          <CardTitle className="mb-2">
            <h2>{project.title}</h2>
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </div>
        <div className="flex flex-wrap justify-between lg:justify-start 2xl:justify-around gap-12 mx-auto mt-4 lg:pb-5 w-full lg:w-10/12 2xl:w-full h-full">
          <div className="md:block hidden">
            <h4>Languages</h4>
            <ul>
              {project.tech.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          {project.tech.frameworks && (
            <div>
              <h4>Frameworks</h4>
              <ul>
                {project.tech.frameworks?.map((framework, index) => (
                  <li key={index}>{framework}</li>
                ))}
              </ul>
            </div>
          )}
          {project.tech.libraries && (
            <div>
              <h4>Libraries</h4>
              <ul>
                {project.tech.libraries?.map((library, index) => (
                  <li key={index}>{library}</li>
                ))}
              </ul>
            </div>
          )}
          {project.tech.technologies && (
            <div className="md:block hidden">
              <h4>Technologies</h4>
              <ul>
                {project.tech.technologies?.map((technology, index) => (
                  <li key={index}>{technology}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex md:flex-row flex-col flex-wrap justify-around lg:justify-start gap-3 mt-4">
          {project.tags.map((tag, index) => (
            <Badge variant={"outline"} key={index} className="px-3">
              #{tag.replace(" ", "-").toLowerCase()}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex md:flex-row flex-col flex-wrap justify-center items-center gap-3 px-3 lg:py-3">
        {project.githubLink && (
          <DynamicButton
            variant={"tertiaryOutline"}
            onClick={() => router.push(project.githubLink || "")}
            icon={TbBrandGithubFilled}
          >
            GitHub
          </DynamicButton>
        )}
        {project.liveLink && (
          <DynamicButton
            variant={"secondaryOutline"}
            onClick={() => router.push(project.liveLink || "")}
          >
            View Project Live
          </DynamicButton>
        )}
      </CardFooter>
    </Card>
  );
}
