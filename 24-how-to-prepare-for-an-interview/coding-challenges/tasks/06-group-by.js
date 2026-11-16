// Task 6: Group by
// Lecture: Coding Challenges
//
// A new one, not solved in the lecture. "Write groupBy(items, getKey) without
// Object.groupBy()". getKey is called with each item and returns its group name.
// groupBy returns a plain object: one property per group, holding an array of the
// items of that group, in the order they came. An empty list gives an empty object.
// Start with the clarifying questions and the examples, as in the lecture.
//
// Examples:
//   const orders = [
//       { id: 1, status: 'paid' },
//       { id: 2, status: 'shipped' },
//       { id: 3, status: 'paid' },
//   ];
//   groupBy(orders, (order) => order.status)
//   // { paid: [{ id: 1, ... }, { id: 3, ... }], shipped: [{ id: 2, ... }] }
//
// Run the tests: npm test -- 24-how-to-prepare-for-an-interview/coding-challenges

export function groupBy(items, getKey) {
    // Your code here
}
