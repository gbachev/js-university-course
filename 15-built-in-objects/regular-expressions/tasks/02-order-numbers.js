// Task 2: Find the order numbers
// Lecture: Regular Expressions
//
// Customers paste order numbers like ORD-2026-00042 into support emails. Write
// findOrderNumbers(text), which returns an array with one object per order number
// in the text, in the order they appear: { year, number }, both as numbers, so
// ORD-2026-00042 gives { year: 2026, number: 42 }. Use matchAll() and named groups.
// An order number has exactly 4 digits for the year and 5 for the number. When the
// text has no order numbers, return an empty array.
//
// Examples:
//   findOrderNumbers('Where is ORD-2026-00042? Also ORD-2025-01337.')
//   // [{ year: 2026, number: 42 }, { year: 2025, number: 1337 }]
//   findOrderNumbers('Thanks for the help!')   // []
//
// Run the tests: npm test -- 15-built-in-objects/regular-expressions

export function findOrderNumbers(text) {
    // Your code here
}
