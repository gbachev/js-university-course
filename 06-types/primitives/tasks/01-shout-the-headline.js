// Task 1: Shout the headline
// Lecture: Primitive types
//
// Our blog shows the title of the featured post in capital letters. A colleague wrote
// toHeadline(title), which should return the title in uppercase, but it returns the
// title unchanged. Strings are immutable: toUpperCase() does not change title, it
// gives us a new string. Fix the function so it returns the uppercase title.
//
// Examples:
//   toHeadline('learn javascript')   // 'LEARN JAVASCRIPT'
//   toHeadline('Types in JS')        // 'TYPES IN JS'
//
// Run the tests: npm test -- 06-types/primitives

export function toHeadline(title) {
    title.toUpperCase();
    return title;
}
