// Task 3: Edit a book
// Lecture: Handling User Actions
//
// To fix a typo in a book we added by hand, state.js needs updateBook(books, key,
// changes). It returns a new array in which the book with that key is a copy with
// the changes spread over it, like { title: 'Emma' } or { year: 1815 }.
// The other books stay the same objects, and the array and books it receives are not
// changed. The key itself can never change, even if changes has one. An unknown key
// changes nothing, so it returns the same array.
//
// Examples:
//   updateBook(books, 'k1', { title: 'Emma' })
//   // the book 'k1' now has the title 'Emma', every other book is as it was
//   updateBook(books, 'nope', { title: 'Emma' }) === books   // true
//
// Run the tests: npm test -- 21-our-first-project/handling-user-actions

export function updateBook(books, key, changes) {
    // Your code here
}
