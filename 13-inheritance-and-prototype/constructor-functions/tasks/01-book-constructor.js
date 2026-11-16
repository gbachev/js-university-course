// Task 1: A Book constructor
// Lecture: Constructor Functions
//
// Our bookshop builds its catalog from thousands of books. Write the constructor
// function Book(title, author, pages): it stores the three values on the new book.
// Add a describe() method on Book.prototype that returns a line like
// 'Dune by Frank Herbert, 412 pages', so all books share one function and every book
// owns only title, author and pages.
//
// Examples:
//   const dune = new Book('Dune', 'Frank Herbert', 412);
//   dune.describe()        // 'Dune by Frank Herbert, 412 pages'
//   Object.keys(dune)      // ['title', 'author', 'pages']
//   dune instanceof Book   // true
//
// Run the tests: npm test -- 13-inheritance-and-prototype/constructor-functions

export function Book(title, author, pages) {
    // Your code here
}
