// Task 3: Format any input
// Lecture: typeof
//
// A form library gives us the value of a field, and the value can be of any type.
// formatInput(input) should return a string to show on the page: a string without
// the spaces around it, a number with 2 decimal places (toFixed() from the Number
// lecture), and an empty string '' for anything else. Right now it calls trim() on every value, so it throws a TypeError
// for numbers, null and undefined. Fix it with typeof checks.
//
// Examples:
//   formatInput('  Ada ')   // 'Ada'
//   formatInput(5)          // '5.00'
//   formatInput(null)       // ''
//
// Run the tests: npm test -- 06-types/typeof

export function formatInput(input) {
    return input.trim();
}
