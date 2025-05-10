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
 * Sorts an array of strings alphabetically in ascending order.
 *
 * @param array - The array of strings to sort
 * @returns A new array sorted alphabetically
 *
 * @example
 * const names = ["Charlie", "Alice", "Bob"];
 * const sortedNames = sortAlphabetically(names);
 * // Output: ["Alice", "Bob", "Charlie"]
 */
export function sortAlphabetically(array: string[]): string[] {
  return [...array].sort((a, b) => a.localeCompare(b));
}

/**
 * Sorts an array of strings by the length of the strings in ascending order.
 *
 * @param array - The array of strings to sort
 * @returns A new array sorted by string length
 *
 * @example
 * const words = ["apple", "cat", "banana"];
 * const sortedWords = sortByLength(words);
 * // Output: ["cat", "apple", "banana"]
 */
export function sortByLength(array: string[]): string[] {
  return [...array].sort((a, b) => a.length - b.length);
}

/**
 * Sorts an array of objects by a specified property.
 *
 * @template T - The type of objects in the array
 * @param array - The array of objects to sort
 * @param property - The property to sort by
 * @param ascending - Whether to sort in ascending order (default: true)
 * @returns A new array sorted by the specified property
 *
 * @example
 * const users = [
 *   { name: "Alice", age: 25 },
 *   { name: "Bob", age: 30 },
 *   { name: "Charlie", age: 20 }
 * ];
 * const sortedByAge = sortByProperty(users, "age");
 * // Output: [{ name: "Charlie", age: 20 }, { name: "Alice", age: 25 }, { name: "Bob", age: 30 }]
 */
export function sortByProperty<T>(
  array: T[],
  property: keyof T,
  ascending: boolean = true
): T[] {
  return [...array].sort((a, b) => {
    if (a[property] < b[property]) {
      return ascending ? -1 : 1;
    }
    if (a[property] > b[property]) {
      return ascending ? 1 : -1;
    }
    return 0;
  });
}

/**
 * Groups an array of objects by a specified property and optionally sorts each group.
 *
 * @template T - The type of elements in the array
 * @param {T[]} array - The array to group and sort
 * @param {keyof T} groupByProperty - The property to group the array by
 * @param {keyof T} [sortByPropertyKey] - Optional property to sort each group by
 * @param {boolean} [ascending=true] - Whether to sort in ascending order (true) or descending order (false)
 * @param {boolean} [sortByLength=false] - Whether to sort by the length of the property value instead of the value itself
 * @param {boolean} [groupByLength=false] - Whether to group by the length of the property value instead of the value itself
 * @returns {T[]} A new array with elements grouped and sorted according to the specified parameters
 *
 * @example
 * // Group users by department and sort by name
 * const sortedUsers = groupAndSortByProperties(users, 'department', 'name');
 *
 * @example
 * // Group posts by category and sort by date (most recent first)
 * const sortedPosts = groupAndSortByProperties(posts, 'category', 'date', false);
 *
 * // Example 1: Group by "program" and sort by "name"
 * const groupedAndSortedByName = groupAndSortByProperties(
 *   successStories,
 *   "program",
 *   "name",
 *   true
 * );
 *
 * // Example 2: Group by "program" and sort by the length of "story"
 * const groupedAndSortedByStoryLength = groupAndSortByProperties(
 *   successStories,
 *   "program",
 *   "story",
 *   true,
 *   true // Enable sorting by length
 * );
 *
 * // Example 3: Group by the length of "program" and do not sort within groups
 * const groupedByProgramLength = groupAndSortByProperties(
 *   successStories,
 *   "program",
 *   undefined, // No sortByPropertyKey
 *   true,
 *   false, // Do not sort by length
 *   true // Enable grouping by length
 * );
 *
 *
 * @example
 * // Group messages by sender and sort by message length
 * const sortedMessages = groupAndSortByProperties(messages, 'sender', 'content', true, true);
 */
export function groupAndSortByProperties<T>(
  array: T[],
  groupByProperty: keyof T,
  sortByPropertyKey?: keyof T,
  ascending: boolean = true,
  sortByLength: boolean = false,
  groupByLength: boolean = false
): T[] {
  // Group the array by the specified property or by the length of the property
  const grouped = array.reduce((acc, item) => {
    const key = groupByLength
      ? (item[groupByProperty] as unknown as string)?.length || 0
      : (item[groupByProperty] as string | number);

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string | number, T[]>);

  // Sort the group keys to ensure the groups are processed in the correct order
  const sortedKeys = Object.keys(grouped).sort((a, b) => {
    const numA = parseInt(a, 10);
    const numB = parseInt(b, 10);
    return groupByLength
      ? ascending
        ? numA - numB
        : numB - numA
      : a.localeCompare(b);
  });

  // Sort each group by the specified property or by the length of the property
  const sortedGroups = sortedKeys.map((key) => {
    if (sortByLength) {
      return [...grouped[key]].sort((a, b) => {
        const lengthA =
          (a[sortByPropertyKey!] as unknown as string)?.length || 0;
        const lengthB =
          (b[sortByPropertyKey!] as unknown as string)?.length || 0;
        return ascending ? lengthA - lengthB : lengthB - lengthA;
      });
    } else if (sortByPropertyKey) {
      return [...grouped[key]].sort((a, b) => {
        const valueA = a[sortByPropertyKey];
        const valueB = b[sortByPropertyKey];

        // Check if the property is a date in the format YYYY-MM-DD
        if (
          typeof valueA === "string" &&
          typeof valueB === "string" &&
          /^\d{4}-\d{2}-\d{2}$/.test(valueA) &&
          /^\d{4}-\d{2}-\d{2}$/.test(valueB)
        ) {
          const dateA = new Date(valueA);
          const dateB = new Date(valueB);
          return ascending
            ? dateA.getTime() - dateB.getTime()
            : dateB.getTime() - dateA.getTime();
        }

        // Default sorting for non-date properties
        if (valueA < valueB) {
          return ascending ? -1 : 1;
        }
        if (valueA > valueB) {
          return ascending ? 1 : -1;
        }
        return 0;
      });
    } else {
      return grouped[key]; // If no sortByPropertyKey is provided, return the group as is
    }
  });

  // Flatten the sorted groups back into a single array
  return sortedGroups.flat();
}

/**
 * Sorts an array of objects by the length of a specified property.
 *
 * @template T - The type of objects in the array
 * @param array - The array of objects to sort
 * @param property - The property whose length will be used for sorting
 * @param ascending - Whether to sort in ascending order (default: true)
 * @returns A new array sorted by the length of the specified property
 *
 * @example
 * const items = [
 *   { name: "Alice", description: "Short" },
 *   { name: "Bob", description: "A bit longer" },
 *   { name: "Charlie", description: "The longest description here" }
 * ];
 * const sortedByDescriptionLength = sortByPropertyLength(items, "description");
 * // Output: [
 * //   { name: "Alice", description: "Short" },
 * //   { name: "Bob", description: "A bit longer" },
 * //   { name: "Charlie", description: "The longest description here" }
 * // ]
 */
export function sortByPropertyLength<T>(
  array: T[],
  property: keyof T,
  ascending: boolean = true
): T[] {
  return [...array].sort((a, b) => {
    const lengthA = (a[property] as unknown as string)?.length || 0;
    const lengthB = (b[property] as unknown as string)?.length || 0;

    if (lengthA < lengthB) {
      return ascending ? -1 : 1;
    }
    if (lengthA > lengthB) {
      return ascending ? 1 : -1;
    }
    return 0;
  });
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
