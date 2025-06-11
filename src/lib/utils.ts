import { clsx, type ClassValue } from "clsx";
import { JSX } from "react";
import { twMerge } from "tailwind-merge";
import { parseLengthAndUnit } from "./utils/parse";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Creates a CSS animation for a given loader.
 *
 * This function generates a unique animation name based on the provided
 * loader name and suffix. It then creates a `<style>` element and appends
 * it to the document's head, inserting the keyframes for the animation.
 *
 * @param loaderName - The name of the loader for which the animation is created.
 * @param frames - The keyframes of the animation as a string.
 * @param suffix - A suffix to ensure the animation name is unique.
 * @returns The generated animation name.
 */
export const createAnimation = (
  loaderName: string,
  frames: string,
  suffix: string,
): string => {
  const animationName = `react-spinners-${loaderName}-${suffix}`;

  if (typeof window == "undefined" || !window.document) {
    return animationName;
  }

  const styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  const styleSheet = styleEl.sheet;

  const keyFrames = `
    @keyframes ${animationName} {
      ${frames}
    }
  `;

  if (styleSheet) {
    styleSheet.insertRule(keyFrames, 0);
  }

  return animationName;
};

export const sync = createAnimation(
  "SyncLoader",
  `33% {transform: translateY(40px)} 
   44% {transform: translateY(50px)} 
   66% {transform: translateY(20px)} 
   88% {transform: translateY(10px)} 
   100% {transform: translateY(0)}`,
  "sync",
);

/**
 * Converts a numeric or string value to a CSS length value with units.
 *
 * @param value - The value to be converted. It can be a number or a string.
 * @returns A string representing the CSS length value with units.
 */
export function cssValue(value: number | string): string {
  const lengthWithunit = parseLengthAndUnit(value);

  return `${lengthWithunit.value}${lengthWithunit.unit}`;
}

/**
 * Asynchronously retrieves an SVG element by service name from the specified icons collection.
 *
 * @param {Object} params - The parameters for retrieving the SVG.
 * @param {string} params.name - The name of the service to find.
 * @param {string} [params.icons="svgIcons"] - The name of the icons collection to search within.
 *
 * @returns {Promise<any>} A Promise that resolves to the found SVG object with name and svg properties,
 * or an empty array if no matching SVG is found or an error occurs.
 *
 * @throws {Error} Logs the error to console but doesn't throw it, returns empty array instead.
 *
 * @example
 * const serviceSvg = await getSVGByServiceName({ name: "react" });
 * if (serviceSvg) {
 *   // Use serviceSvg.svg
 * }
 */
export async function getSVGByServiceName({
  name,
  icons = "svgIcons",
}: {
  name: string;
  icons: string;
}): Promise<any> {
  try {
    const iconModule = await import(`@/lib/constants/services/svgIcons`);
    // Return the specific named export that matches the name
    if (icons in iconModule) {
      return (iconModule as any)[icons].find(
        (i: { name: string; svg: JSX.Element }) => i.name === name,
      );
    } else {
      console.error(`Export named ${icons} not found in module`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading resource: ${error}`);
    return [];
  }
}
