// Task 1: Reachable from the roots
// Lecture: Garbage Collection
//
// Let's play the mark phase of the garbage collector on a small heap. The heap is an
// object: each key is the name of a value, and its array lists the names it references.
// Write markReachable(heap, roots): roots is an array of names, and the function returns
// the names of every value reachable from them, sorted alphabetically. A cycle must not
// make the function loop forever, and a value that points at itself counts once.
//
// Examples:
//   const heap = {
//       globals: ['cart'], cart: ['items'], items: [],
//       order: ['invoice'], invoice: ['order'],
//   };
//   markReachable(heap, ['globals'])   // ['cart', 'globals', 'items']
//   markReachable(heap, [])            // []
//
// Run the tests: npm test -- 22-performance-and-memory/garbage-collection

export function markReachable(heap, roots) {
    // Your code here
}
