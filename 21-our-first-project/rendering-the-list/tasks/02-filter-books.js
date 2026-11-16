// Task 2: Show only unread books
// Lecture: Rendering the List
//
// render() draws whatever array it gets, so a filter is a function that picks the
// books to show. Write visibleBooks(books, filter): filter is 'all', 'read' or
// 'unread', and it returns a new array with the matching books in their order. The
// list it receives stays as it was. Any other filter is a bug in our code, so it
// throws an Error with the message 'Unknown filter: <filter>'.
//
// Examples:
//   visibleBooks(books, 'unread')   // only the books with read: false
//   visibleBooks(books, 'all')      // every book, in a new array
//   visibleBooks(books, 'done')     // throws Error: Unknown filter: done
//
// Run the tests: npm test -- 21-our-first-project/rendering-the-list

export function visibleBooks(books, filter) {
    // Your code here
}
