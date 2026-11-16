// Task 3: An ebook is a book
// Lecture: Constructor Functions
//
// Our shop now sells ebooks too. Write the constructor function
// Ebook(title, author, pages, sizeInMb) so that it inherits from Book below: it runs
// Book for the shared fields, adds its own sizeInMb, and its prototype links to
// Book.prototype, with the constructor property fixed. Add download() on
// Ebook.prototype, returning 'Downloading Dune (2.5 MB)'. Ordinary books must not get
// download().
//
// Examples:
//   const dune = new Ebook('Dune', 'Frank Herbert', 412, 2.5);
//   dune.describe()            // 'Dune by Frank Herbert, 412 pages'
//   dune.download()            // 'Downloading Dune (2.5 MB)'
//   dune instanceof Book       // true
//   dune.constructor === Ebook // true
//
// Run the tests: npm test -- 13-inheritance-and-prototype/constructor-functions

export function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.describe = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
};

export function Ebook(title, author, pages, sizeInMb) {
    // Your code here
}
