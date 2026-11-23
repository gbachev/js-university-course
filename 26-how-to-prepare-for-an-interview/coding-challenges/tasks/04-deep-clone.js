// Task 4: A deeper clone
// Lecture: Coding Challenges
//
// Our hand-written deepClone() from the lecture copies plain objects, arrays and
// primitives. The interviewer asks us to close its two gaps. Write deepClone(value) so
// that it also copies a Date as a new Date with the same time, and handles circular
// references: an object that refers to itself, directly or through its children, is
// copied once, and the copy refers to the copy. Use a WeakMap from each original to its
// copy. Nothing in the copy may share an object or an array with the original.
//
// Examples:
//   const order = { id: 7, items: [{ title: 'Dune' }], placedAt: new Date('2026-11-16') };
//   const copy = deepClone(order);
//   copy.items[0].title = 'Emma';
//   order.items[0].title   // 'Dune'
//   copy.placedAt instanceof Date   // true
//
// Run the tests: npm test -- 26-how-to-prepare-for-an-interview/coding-challenges

export function deepClone(value) {
    // Your code here
}
