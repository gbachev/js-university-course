// Task 3: Flatten to a depth
// Lecture: Coding Challenges
//
// "Now without flat()". Write flatten(list, depth), which works like list.flat(depth)
// without calling flat() or flatMap(): it returns a new array where nested arrays are
// opened up to depth levels. depth defaults to Infinity, so flatten(list) opens every
// level. With depth 0 we get a copy of the list. The original list never changes.
//
// Examples:
//   const boxes = ['book', ['pen', ['ink', ['nib']]], 'mug'];
//   flatten(boxes)      // ['book', 'pen', 'ink', 'nib', 'mug']
//   flatten(boxes, 1)   // ['book', 'pen', ['ink', ['nib']], 'mug']
//   flatten([])         // []
//
// Run the tests: npm test -- 24-how-to-prepare-for-an-interview/coding-challenges

export function flatten(list, depth = Infinity) {
    // Your code here
}
