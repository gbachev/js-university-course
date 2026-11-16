// Task 1: Notes on a book
// Lecture: WeakMap, WeakSet and Typed Arrays
//
// Readers can write private notes on the books in their list. The book objects, like
// { title: 'Dune' }, come from another part of the app, so we must not add properties
// to them. Keep the notes in the WeakMap below instead, with the book object as the key.
// addNote(book, text) adds a note to that book's notes and returns how many notes the
// book has now. getNotes(book) returns the book's notes in the order they were added,
// or an empty array when it has none. Two different objects with the same title are
// two different books.
//
// Examples:
//   const dune = { title: 'Dune' };
//   addNote(dune, 'Read the appendix')  // 1
//   addNote(dune, 'Lend to Anna')       // 2
//   getNotes(dune)                      // [ 'Read the appendix', 'Lend to Anna' ]
//   getNotes({ title: 'Dune' })         // []
//
// Run the tests: npm test -- 08-arrays-and-keyed-collections/keyed-collections-typed-arrays

const notesByBook = new WeakMap();

export function addNote(book, text) {
    // Your code here
}

export function getNotes(book) {
    // Your code here
}
