export const splitAndTrimQuotes = (
  quote: string | null | undefined
): string[] => {
  if (!quote) return [];
  return quote.split("\n").reduce((acc, paragraph) => {
    const trimmed = paragraph.trim();
    if (trimmed) acc.push(trimmed);
    return acc;
  }, [] as string[]);
};

/**
 * Formats a given date string into the format 'YYYY-MM-DD'.
 *
 * @param dateString - The date string to format.
 * @returns The formatted date string in 'YYYY-MM-DD' format.
 * @throws Will throw an error if the provided date string is invalid.
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateString}`);
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/**
 * Converts a given title string into a URL-friendly slug.
 *
 * The function performs the following transformations:
 * - Converts the string to lowercase.
 * - Removes all non-alphanumeric characters except spaces and hyphens.
 * - Replaces spaces and consecutive hyphens with a single hyphen.
 *
 * @param title - The title string to be converted into a slug.
 * @returns The URL-friendly slug.
 */
export function generateSlug(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug;
}

/**
 * Formats a number as a currency string.
 *
 * @param value - The numeric value to format.
 * @returns A string representing the formatted currency value.
 *          If the input is not a number, it returns "$0.00".
 */
export const formatCurrency = (value: number) => {
  if (isNaN(value)) return "$0.00";
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
};


/**
 * Compares the word count of a string against a maximum threshold.
 * 
 * @param text - The string to check word count for
 * @param maxWords - The maximum number of words allowed
 * @returns `true` if the text contains fewer or equal words than the maximum, `false` otherwise
 * @throws {Error} When maxWords is negative
 * 
 * @example
 * ```typescript
 * // Returns true as the string has 5 words
 * compareStringWordCount("This is a simple example", 5);
 * 
 * // Returns false as the string has 5 words
 * compareStringWordCount("This is a simple example", 4);
 * ```
 */
export function compareStringWordCount(text: string, maxWords: number): boolean {
  if (maxWords < 0) {
    throw new Error("Maximum words must be a non-negative number.");
  }

  const words = text.trim().split(/\s+/);
  return words.length <= maxWords;
}

/**
 * Clips a string to a specified maximum length.
 * 
 * @param {string} text - The string to be clipped
 * @param {number} maxLength - The maximum length allowed for the string
 * @returns {string} The original string if its length is less than or equal to maxLength,
 *                   otherwise the string truncated to maxLength characters
 */
export function clipString(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength);
}

/**
 * Formats a number by rounding it to the nearest hundred and adding commas as thousand separators.
 *
 * @param value - The number to format.
 * @returns The formatted number as a string.
 */
export function formatNumber(value: number): string {
  return (Math.round(value / 100) * 100)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Converts a total number of seconds into a string formatted as MM:SS.
 *
 * @param totalSeconds - The total number of seconds to format.
 * @returns A string representing the formatted time in MM:SS format.
 */
export function formatSecondsToMmSs(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

/**
 * Capitalizes a string by replacing hyphens and underscores with spaces,
 * and converting the first character of each word to uppercase.
 *
 * Numbers and special characters are preserved as-is and do not affect capitalization.
 *
 * @param str - The input string to capitalize.
 * @returns The capitalized string with hyphens and underscores replaced by spaces.
 *
 * @example
 * ```typescript
 * capitalize("hello-world"); // Returns "Hello World"
 * capitalize("hello_world"); // Returns "Hello World"
 * capitalize("hello world"); // Returns "Hello World"
 * capitalize("123-hello_world"); // Returns "123 Hello World"
 * capitalize("hello@world"); // Returns "Hello@World"
 * ```
 */
export const capitalize = (str: string) => {
  return str
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/\b[a-zA-Z]/g, (char) => char.toUpperCase());
};

/**
 * Returns the appropriate suffix for a given day of the month.
 *
 * The suffixes are:
 * - "st" for 1, 21, 31
 * - "nd" for 2, 22
 * - "rd" for 3, 23
 * - "th" for all other numbers
 *
 * @param day - The day of the month (1-31).
 * @returns The suffix for the given day.
 */
export function getDaySuffix(day: number): string {
  // Get the last digit of the day to determine the suffix
  const lastDigit = day % 10;

  // Handle special cases for 11, 12, 13
  if (day >= 11 && day <= 13) {
    return "th";
  }

  // Return the correct suffix based on the last digit
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
