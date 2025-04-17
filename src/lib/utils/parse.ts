import { cssUnit } from "../constants/constants";

/**
 * Parses a given size value (number or string) and returns an object containing the numeric value and its unit.
 *
 * @param size - The size value to parse. It can be a number or a string.
 * @returns An object containing the parsed numeric value and its unit.
 *
 * @example
 * ```typescript
 * parseLengthAndUnit(10); // { value: 10, unit: "px" }
 * parseLengthAndUnit("10px"); // { value: 10, unit: "px" }
 * parseLengthAndUnit("2.5em"); // { value: 2.5, unit: "em" }
 * ```
 *
 * @remarks
 * If the provided size is a number, the unit defaults to "px".
 * If the provided size is a string and the unit is not recognized, a warning is logged and the unit defaults to "px".
 */
export function parseLengthAndUnit(size: number | string): {
  value: number;
  unit: string;
} {
  if (typeof size === "number") {
    return {
      value: size,
      unit: "px",
    };
  }
  let value: number;
  const valueString: string = (size.match(/^[0-9.]*/) || "").toString();
  if (valueString.includes(".")) {
    value = parseFloat(valueString);
  } else {
    value = parseInt(valueString, 10);
  }

  const unit: string = (size.match(/[^0-9]*$/) || "").toString();

  if (cssUnit[unit]) {
    return {
      value,
      unit,
    };
  }

  console.warn(
    `React Spinners: ${size} is not a valid css value. Defaulting to ${value}px.`
  );

  return {
    value,
    unit: "px",
  };
}

/**
 * Parses a reading time string and converts it to the total number of minutes.
 *
 * The input string can contain minutes and seconds in the format "Xm Ys",
 * where X is the number of minutes and Y is the number of seconds.
 * For example, "5m 30s" will be converted to 5 minutes.
 *
 * @param time - The reading time string to parse.
 * @returns The total number of minutes.
 */
export function parseReadingTimeToMinutes(time: string): number {
  let totalMinutes = 0;

  const minutesMatch = time.match(/(\d+)m/);
  if (minutesMatch) {
    totalMinutes += parseInt(minutesMatch[1], 10);
  }

  const secondsMatch = time.match(/(\d+)s/);
  if (secondsMatch) {
    totalMinutes += Math.floor(parseInt(secondsMatch[1], 10) / 60);
  }

  return totalMinutes;
}

/**
 * Parses a reading time string in the format of "Xm Ys" (where X is minutes and Y is seconds)
 * and converts it to the total number of seconds.
 *
 * @param timeStr - The reading time string to parse, e.g., "5m 30s".
 * @returns The total number of seconds represented by the input string.
 */
export function parseReadingTimeToSeconds(timeStr: string): number {
  let totalSeconds = 0;

  const mMatch = timeStr.match(/(\d+)m/);
  if (mMatch) {
    totalSeconds += parseInt(mMatch[1], 10) * 60;
  }

  const sMatch = timeStr.match(/(\d+)s/);
  if (sMatch) {
    totalSeconds += parseInt(sMatch[1], 10);
  }

  return totalSeconds;
}

/**
 * Parses a reading time string and converts it to decimal minutes.
 *
 * The input string should contain minutes and/or seconds in the format "Xm Ys",
 * where X is the number of minutes and Y is the number of seconds.
 *
 * @param str - The reading time string to parse.
 * @returns The total reading time in decimal minutes.
 *
 * @example
 * ```typescript
 * parseReadingTimeToDecimalMinutes("2m 30s"); // returns 2.5
 * parseReadingTimeToDecimalMinutes("1m"); // returns 1
 * parseReadingTimeToDecimalMinutes("45s"); // returns 0.75
 * ```
 */
export function parseReadingTimeToDecimalMinutes(str: string): number {
  let total = 0;
  const m = str.match(/(\d+)m/);
  if (m) total += parseInt(m[1], 10);
  const s = str.match(/(\d+)s/);
  if (s) total += parseInt(s[1], 10) / 60;
  return total;
}
