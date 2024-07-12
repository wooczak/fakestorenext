/**
 * @description
 * Takes a string as an argument and returns a string with first character as upper case and the rest as lower case.
 * @param input Any kind of string value.
 * @returns String value with first character as upper case and the rest as lower case.
 */
export function firstCharUpperCase(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}