// Task 3: In both lists
// Lecture: Big O Notation
//
// The wishlist filter from the lecture: inBothLists(wishlist, inStock) returns the
// titles of the wishlist that are also in stock. includes() is a loop inside
// filter()'s loop, so it is O(n * m). Make it O(n + m) with a Set while it gives the
// same results: the wishlist's order, its repeats kept, exact comparison. Either list
// may be empty. The tests also time two lists of 50,000 titles, which must take less
// than 250 ms. Then say out loud what the faster version costs in memory.
//
// Examples:
//   inBothLists(['Dune', 'Emma', 'Ulysses'], ['Emma', 'Beloved', 'Dune'])
//   // ['Dune', 'Emma']
//   inBothLists([], ['Emma'])   // []
//
// Run the tests: npm test -- 24-how-to-prepare-for-an-interview/big-o

export function inBothLists(wishlist, inStock) {
    return wishlist.filter((title) => inStock.includes(title));
}
