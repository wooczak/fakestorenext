/**
 * @description
 * Takes a string as an argument and returns a string with first character as upper case and the rest as lower case.
 * @param input Any kind of string value.
 * @returns String value with first character as upper case and the rest as lower case.
 */
export function firstCharUpperCase(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

/**
 *
 * @param input An encoded URI string
 * @returns A decoded string that doesn't contain URI-related characters, e.g. %20 instead of space.
 */

export function decodeURLString(input: string): string {
  return firstCharUpperCase(decodeURIComponent(input));
}

export function extractProductDetailsFromURL(input: string): {
  name: string;
  id: number;
} {
  return {
    name: input.split("_")[0],
    id: parseInt(input.split("_")[1], 10),
  };
}

/**
 * 
 * @param slug Any URI-related string that might contain slashes that would disturb the Next.js params.slug logic afterwards.
 * @returns A string without slashes.
 */
export function removeSlashes(slug: string): string {
  return slug.replace(/\//g, "");
}
