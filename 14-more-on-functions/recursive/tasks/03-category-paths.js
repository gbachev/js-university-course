// Task 3: Category paths
// Lecture: Recursive Functions
//
// The shop's categories are nested: each one is { name } or { name, children }, and
// the children are categories too, at any depth. For the search page we need every
// category as one flat list of paths, in menu order, each parent before its children.
// Write categoryPaths(categories): it returns an array of strings, where a path joins
// the names from the top with ' > '. An empty list gives an empty array.
//
// Examples:
//   categoryPaths([
//       { name: 'Books', children: [{ name: 'Fiction', children: [{ name: 'Crime' }] }] },
//       { name: 'Music' },
//   ])
//   // ['Books', 'Books > Fiction', 'Books > Fiction > Crime', 'Music']
//
// Run the tests: npm test -- 14-more-on-functions/recursive

export function categoryPaths(categories) {
    // Your code here
}
