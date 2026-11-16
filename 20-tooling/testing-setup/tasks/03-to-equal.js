// Task 3: toBe or toEqual?
// Lecture: Testing Setup
//
// toBe checks for the very same value with Object.is, toEqual compares contents.
// Write isEqual(a, b), the check behind toEqual. Two values that are the same by
// Object.is are equal. Two arrays are equal when they have the same length and their
// items are equal one by one. Two plain objects are equal when they have the same
// keys and equal values for each key, in any order. Arrays and objects can be nested.
// Everything else is not equal, and an array is never equal to an object.
//
// Examples:
//   isEqual({ title: 'Dune', read: false }, { read: false, title: 'Dune' })   // true
//   isEqual([{ title: 'Dune' }], [{ title: 'Emma' }])                         // false
//   isEqual(NaN, NaN)                                                         // true
//
// Run the tests: npm test -- 20-tooling/testing-setup

export function isEqual(a, b) {
    // Your code here
}
