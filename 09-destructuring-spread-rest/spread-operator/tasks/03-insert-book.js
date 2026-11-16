// Task 3: Insert a book
// Lecture: The Spread Operator
//
// Our reading list is an array of book titles in the order we want to read them.
// Write insertBook(readingList, position, book): it returns a new list with the book
// at that position (0 is the start) and the other books moved one place back. Take the
// part before the position and the part after it with slice() and put the book
// between them with spread. A position equal to the length of the list adds the book at
// the end. The list we get must not change.
//
// Examples:
//   insertBook(['Dune', 'Emma', 'Ulysses'], 1, 'Beloved')
//   // ['Dune', 'Beloved', 'Emma', 'Ulysses']
//   insertBook(['Dune'], 0, 'Beloved')   // ['Beloved', 'Dune']
//
// Run the tests: npm test -- 09-destructuring-spread-rest/spread-operator

export function insertBook(readingList, position, book) {
    // Your code here
}
