"use client";

import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";

export default function Timeline({
  items,
  orientation = "vertical",
}: {
  items: {
    title: string;
    sub: string;
    description: string;
    icon: IconType;
  }[];
  orientation?: "vertical" | "horizontal";
}) {
  return (
    <div
      className={`relative w-1/3 mx-auto pt-16 ${
        orientation === "vertical"
          ? "flex flex-col space-y-10"
          : "flex flex-row gap-9 justify-between overflow-x-auto flex-wrap w-11/12"
      }`}
      role="list"
      aria-label="Timeline"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "relative ",
            orientation === "horizontal" ? "w-1/5" : ""
          )}
        >
          <div
            className={`flex ${
              orientation === "vertical"
                ? "items-start"
                : "flex-col items-center"
            }`}
          >
            {/* Timeline Line */}
            {orientation === "vertical" && index !== items.length - 1 && (
              <div className="top-10 left-4.5 z-0 absolute bg-accent w-px h-full" />
            )}

            {/* Icon */}
            <div className="relative z-10 flex justify-center items-center bg-tertiary p-2 rounded-full text-background">
              <item.icon className="w-6 h-6" />
            </div>

            {/* Content */}
            <div
              className={`${
                orientation === "horizontal" ? "text-center mt-4 ml-0" : "ml-6"
              }`}
            >
              <h5 className="text-xs">{item.sub}</h5>
              <h4
                className={cn("", {
                  "w-2/3 mx-auto": orientation === "horizontal",
                })}
              >
                {item.title}
              </h4>

              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
