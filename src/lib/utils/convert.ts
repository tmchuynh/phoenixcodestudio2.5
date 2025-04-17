/**
 * Converts a total number of seconds into a string formatted as MM:SS.
 *
 * @param totalSeconds - The total number of seconds to format.
 * @returns A string representing the formatted time in MM:SS format.
 */
export function convertSecondsToMM_SS(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

/**
 * Converts a decimal representation of minutes into a string formatted as "MM:SS".
 *
 * @param decimalMin - The decimal number representing minutes.
 * @returns A string representing the time in "MM:SS" format.
 */
export function convertMinutesToMM_SS(decimalMin: number): string {
  const secs = Math.round(decimalMin * 60);
  const mm = Math.floor(secs / 60);
  const ss = secs;
  return `${mm}:${ss.toString().padStart(2, "0")}`;
}

/**
 * Converts a total number of seconds into a formatted string with minutes and seconds.
 *
 * @param totalSeconds - The total number of seconds to format.
 * @returns A string representing the formatted time in the format "Xm Ys".
 */
export function convertSecondsToXmYs(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}m ${s}s`;
}

export function convertDecimalsToMinutes(value: number) {
  return `${value.toFixed(2)} min`;
}

export function convertSecondsToMinutes(seconds: number): number {
  return Math.floor(seconds / 60);
}

/**
 * Converts an object with day, month, and year properties into a JavaScript Date object.
 * Note: Month is 0-indexed in JavaScript Date (0 = January, 11 = December),
 * but we assume the input month is 1-indexed (1 = January, 12 = December).
 *
 * @param date - An object containing day, month, and year properties.
 * @returns A JavaScript Date object representing the input date.
 */
export function convertToDate(date: {
  day: number;
  month: number;
  year: number;
}): string {
  // Subtract 1 from month because JavaScript Date months are 0-indexed
  const newDate = new Date(date.year, date.month - 1, date.day);
  return newDate.toLocaleDateString();
}
