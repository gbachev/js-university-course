// Task 1: Mark all read
// Lecture: Handling User Actions
//
// A "Mark all read" button needs one more pure action for state.js. Write
// markAllRead(books): it returns a new array in which every book has read: true. Like
// toggleRead(), it never changes the array or the books it receives, and a book that
// is already read can stay the same object. When every book is read already (or the
// list is empty), nothing changes, so it returns the same array, the way addBook()
// does for a duplicate.
//
// Examples:
//   markAllRead([{ key: 'dune', read: false }])   // [{ key: 'dune', read: true }]
//   markAllRead(books) === books                  // true when all are read already
//
// Run the tests: npm test -- 21-our-first-project/handling-user-actions

export function markAllRead(books) {
    // Your code here
}
