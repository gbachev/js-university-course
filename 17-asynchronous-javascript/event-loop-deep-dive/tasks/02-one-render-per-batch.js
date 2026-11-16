// Task 2: One render per batch
// Lecture: Event Loop Deep Dive
//
// When our code changes the cart three times in a row, we want to redraw it once,
// not three times. Write createBatcher(render). It returns a function
// schedule(change) that collects the changes. Use queueMicrotask(): once the current
// code has finished, render is called once with an array of all changes collected so
// far, in order. Being a microtask, it runs before any timer that is already waiting.
// Changes scheduled later start a new batch. schedule() never calls render directly.
//
// Examples:
//   const schedule = createBatcher((changes) => console.log(changes));
//   schedule('add book-1');
//   schedule('add book-2');
//   // after the current code: ['add book-1', 'add book-2']
//
// Run the tests: npm test -- 17-asynchronous-javascript/event-loop-deep-dive

export function createBatcher(render) {
    // Your code here
}
