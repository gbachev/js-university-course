// Task 2: Take only what we need
// Lecture: Generators (function*)
//
// Write the generator function take(iterable, count). It yields the first count values
// of any iterable, an array, a Set or an endless generator, and then stops. It reads no
// more values from the source than it hands out, so the source's code after the last
// value we need never runs. When the source has fewer values, take() yields them all,
// and a count of 0 or less yields nothing. Stopping early closes the source, so a
// finally block in a source generator runs (a for...of with a break or return does that).
//
// Examples:
//   [...take(['Dune', 'Emma', 'Ulysses'], 2)]    // ['Dune', 'Emma']
//   [...take(fibonacci(), 5)]                     // [0, 1, 1, 2, 3]
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/generators

export function* take(iterable, count) {
    // Your code here
}
