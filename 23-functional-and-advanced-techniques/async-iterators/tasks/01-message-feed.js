// Task 1: A message feed by hand
// Lecture: Async Iterators and for await...of
//
// Write messageFeed(loadMessage, count). It returns an async iterable: an object with a
// [Symbol.asyncIterator]() method that returns an iterator whose next() returns a promise.
// loadMessage(index) returns a promise of the message at that index. next() waits for
// the next message and resolves to { value: message, done: false }, for the indexes 0 to
// count - 1, then to { value: undefined, done: true }. Every for await...of loop starts
// again from index 0, and a count of 0 gives no messages.
//
// Examples:
//   const feed = messageFeed((i) => Promise.resolve(`Message ${i}`), 2);
//   for await (const message of feed) console.log(message);
//   // Message 0
//   // Message 1
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/async-iterators

export function messageFeed(loadMessage, count) {
    // Your code here
}
