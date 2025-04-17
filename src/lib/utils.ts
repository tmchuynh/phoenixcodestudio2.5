import { clsx, type ClassValue } from "clsx";
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
  suffix: string
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
  "sync"
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
