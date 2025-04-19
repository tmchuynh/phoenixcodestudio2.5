import { BlogPost } from "../interfaces/blogs";

/**
 * Sorts an array of blog posts by their date in ascending order.
 *
 * @param array - The array of blog posts to be sorted.
 * @returns A new array of blog posts sorted by date.
 */
export function sortBlogsByDate(array: BlogPost[]): BlogPost[] {
  const newArray = array.sort((a, b) => {
    // Convert to Date objects directly
    const dateA = new Date(a.date.year, a.date.month - 1, a.date.day);
    const dateB = new Date(b.date.year, b.date.month - 1, b.date.day);

    return compareDates([dateA, dateB]);
  });

  return newArray;
}

/**
 * Generates a random string of specified length.
 * 
 * @param length - The length of the random string to generate.
 * @returns A random string consisting of alphanumeric characters.
 * 
 * @example
 * // Generate a random string of 10 characters
 * const randomStr = generateRandomString(10);
 * // Output example: "a7bZ9pQ3xY"
 */
export function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * Filters an array to return only items where the 'featured' property is truthy.
 *
 * Note: This function uses `array.filter`, which creates a new array.
 * For very large input arrays, this could have performance implications.
 * Ensure the input array size is reasonable to avoid potential performance issues.
 *
 * @param array - The array to filter
 * @returns A new array containing only the items where the 'featured' property is truthy
 */
export function featuredArray(array: any[]) {
  return array.filter((item) => item?.featured === true);
}

/**
 * Compares two dates and returns a number indicating their relative order.
 * The comparison is done in the following order: year, month, and day.
 *
 * @param dates - An array containing two Date objects to be compared.
 * @returns A negative number if the first date is more recent,
 *          a positive number if the second date is more recent,
 *          or zero if both dates are the same.
 */
export function compareDates([dateA, dateB]: Date[]): number {
  // Compare by year
  if (dateA.getFullYear() !== dateB.getFullYear()) {
    return dateB.getFullYear() - dateA.getFullYear(); // Sort by most recent year first
  }

  // Compare by month (if years are the same)
  if (dateA.getMonth() !== dateB.getMonth()) {
    return dateB.getMonth() - dateA.getMonth(); // Sort by most recent month first
  }

  // Compare by day (if both year and month are the same)
  return dateB.getDate() - dateA.getDate(); // Sort by most recent day first
}
