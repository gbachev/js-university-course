// Task 1: The worker's sort
// Lecture: Workers
//
// A worker gets a copy of our books and sends back a sorted copy. Write the function it
// runs, sortBooks(books, field): it returns a new array of the books sorted by field.
// For 'title' it compares with localeCompare(), for 'year' from the oldest to the newest.
// The array it gets stays as it was. Any other field throws an Error with the message
// 'Cannot sort by <field>'. The tests run it in Node: it is plain JavaScript, no worker
// needed to test it.
//
// Examples:
//   sortBooks([{ title: 'Emma', year: 1815 }, { title: 'Dune', year: 1965 }], 'title')
//   // [{ title: 'Dune', year: 1965 }, { title: 'Emma', year: 1815 }]
//   sortBooks(books, 'price')   // throws Error: Cannot sort by price
//
// Run the tests: npm test -- 22-performance-and-memory/workers

export function sortBooks(books, field) {
    // Your code here
}
