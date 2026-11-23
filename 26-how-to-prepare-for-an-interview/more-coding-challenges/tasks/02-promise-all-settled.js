// Task 2: Our own allSettled
// Lecture: More Coding Challenges
//
// The usual follow-up to promiseAll(): "Now write Promise.allSettled() without using
// it." promiseAllSettled(items) returns a promise that waits for every item and never
// rejects. It resolves to an array in input order, not finish order: { status:
// 'fulfilled', value } for an item that worked and { status: 'rejected', reason } for
// one that failed. Plain values count as fulfilled, and an empty array resolves to [].
// Do not use Promise.all(), Promise.allSettled() or the other combinators.
//
// Examples:
//   await promiseAllSettled([later('product', 30), fail('stock is down', 10), 42])
//   // [
//   //     { status: 'fulfilled', value: 'product' },
//   //     { status: 'rejected', reason: Error('stock is down') },
//   //     { status: 'fulfilled', value: 42 },
//   // ]
//
// Run the tests: npm test -- 24-how-to-prepare-for-an-interview/more-coding-challenges

export function promiseAllSettled(items) {
    // Your code here
}
