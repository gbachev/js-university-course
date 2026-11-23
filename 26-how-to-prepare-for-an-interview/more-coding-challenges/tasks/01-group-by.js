// Task 1: Group by
// Lecture: More Coding Challenges
//
// "Write groupBy(items, getKey) without Object.groupBy() or Map.groupBy()". getKey is
// called with each item and returns its group name. groupBy returns a plain object:
// one property per group, holding an array of the items of that group, in the order
// they came. The items themselves are not copied. An empty list gives an empty
// object. Start with the clarifying questions and the examples, as in the lecture.
//
// Examples:
//   const books = [
//       { title: 'Dune', genre: 'sci-fi' },
//       { title: 'Emma', genre: 'classic' },
//       { title: 'Neuromancer', genre: 'sci-fi' },
//   ];
//   groupBy(books, (book) => book.genre)
//   // { 'sci-fi': [{ title: 'Dune', ... }, { title: 'Neuromancer', ... }],
//   //   classic: [{ title: 'Emma', ... }] }
//
// Run the tests: npm test -- 24-how-to-prepare-for-an-interview/more-coding-challenges

export function groupBy(items, getKey) {
    // Your code here
}
