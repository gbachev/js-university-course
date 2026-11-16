// Task 1: Price lookup
// Lecture: Callbacks and Callback Hell
//
// Write getPrice(id, callback) in the error-first style. It fakes a server that
// answers after 200 ms. For a book in the prices object, it calls callback(null, price).
// For an unknown id, it calls callback with an Error whose message is
// 'No price for <id>', and nothing else. The callback is called exactly once.
//
// Examples:
//   getPrice('book-1', (error, price) => console.log(error, price));
//   // 200 ms later: null 25
//   getPrice('book-9', (error) => console.log(error.message));
//   // 200 ms later: No price for book-9
//
// Run the tests: npm test -- 17-asynchronous-javascript/callbacks-and-callback-hell

const prices = { 'book-1': 25, 'book-2': 18 };

export function getPrice(id, callback) {
    // Your code here
}
