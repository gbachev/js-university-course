// Task 3: Retry with backoff
// Lecture: Async/Await
//
// A payment service sometimes fails for a moment. Write the async function
// retry(task, attempts, delayMs). task is a function that returns a promise. Call it
// and return its value as soon as one call works. When a call rejects, wait and try
// again, up to attempts calls in all. The first wait is delayMs, and each next wait
// is twice as long (100, 200, 400 ms...). When the last call fails too, reject with
// its error, without waiting after it.
//
// Examples:
//   await retry(() => chargeCard(60), 3, 100)
//   // fails, waits 100 ms, fails, waits 200 ms, works: { id: 'PAY-1042' }
//
// Run the tests: npm test -- 17-asynchronous-javascript/async-await

export async function retry(task, attempts, delayMs) {
    // Your code here
}
