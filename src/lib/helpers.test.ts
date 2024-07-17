import { firstCharUpperCase } from "./helpers";

const testCases = [
  { input: "HellO", expected: "Hello" },
  { input: "HELLO", expected: "Hello" },
  { input: "hello", expected: "Hello" },
  { input: "Hello, gOOd MorNing", expected: "Hello, good morning" },
  { input: "hello, good MORNING", expected: "Hello, good morning" },
];

describe("firstCharUpperCase test function", function () {
  test.each(testCases)("Test case: $input (input) => $expected (output)", function (testCase) {
    const formattedString = firstCharUpperCase(testCase.input);
    expect(formattedString).toEqual(testCase.expected);
  });
});
