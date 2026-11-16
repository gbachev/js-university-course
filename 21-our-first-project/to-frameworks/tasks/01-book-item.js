// Task 1: A component for a book
// Lecture: From Vanilla JavaScript to Frameworks
//
// Write the component BookItem({ book, onRemove }) that returns an li element for one
// book of our list. The li has the class is-read when the book is read. Inside it: a
// span with the class title and the title, a span with the class author and the text
// 'by <author>' (no author span when the book has no author), and a Remove button
// (type button) with aria-label 'Remove <title>' that calls onRemove(book.key) when
// clicked. A title or an author is always text, never HTML. The component never
// changes the book.
//
// Examples:
//   BookItem({ book: { key: 'dune', title: 'Dune', author: 'Frank Herbert', read: true },
//       onRemove: (key) => console.log(key) })
//   // <li class="is-read"><span class="title">Dune</span>
//   //   <span class="author">by Frank Herbert</span>
//   //   <button type="button" aria-label="Remove Dune">Remove</button></li>
//
// Open the page: run npm run serve, then open
//   21-our-first-project/to-frameworks/tasks/01-book-item.html

export function BookItem({ book, onRemove }) {
    // Your code here
}
