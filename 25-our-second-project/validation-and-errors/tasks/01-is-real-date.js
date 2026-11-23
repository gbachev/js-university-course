// Task 1: A real date
// Lecture: Validating Input and Handling Errors
//
// The form sends the day we applied as text in the shape YYYY-MM-DD. Write
// isRealDate(text) that returns true when the text is a day that exists, and false
// for anything else.
// - Only text in the exact shape YYYY-MM-DD: four digits, a dash, two digits, a dash,
//   two digits. '2026-1-5', '2026/11/23', '23.11.2026' and '2026-11-23T10:00' are
//   false, and so is anything that is not a string (a number, null, undefined).
// - The day must exist: '2026-02-30', '2026-04-31' and '2026-13-01' are false, while
//   '2028-02-29' (a leap year) is true and '2026-02-29' is false.
// Careful: new Date('2026-02-30') does not fail. V8 rolls it over to March 2, so a
// check for NaN alone lets it through.
// Return true or false, never anything else.
//
// Examples:
//   isRealDate('2026-11-23')    true
//   isRealDate('2026-02-30')    false
//   isRealDate('2028-02-29')    true
//   isRealDate('2026-1-5')      false
//   isRealDate(20261123)        false
//
// Run the tests: npm test -- 25-our-second-project/validation-and-errors

export function isRealDate(text) {
    // Your code here
}
