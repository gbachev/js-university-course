// Task 3: Do not wait forever
// Lecture: The Fetch API
//
// Write the async function loadStock(id, ms). It fetches
// https://shop.example/api/stock/<id>, whose JSON body looks like { id, count }, and
// returns the count. The request must not wait longer than ms milliseconds: pass
// AbortSignal.timeout(ms) as the signal. When the time runs out, fetch() rejects with
// an error named 'TimeoutError': then loadStock() returns null, so the page can show
// "stock unknown". Any other error is thrown on. The tests replace fetch() with a
// fake that answers fast, slowly or with an error.
//
// Examples:
//   await loadStock(7, 500)   // 12, when the server answers in time
//   await loadStock(7, 500)   // null, when it takes longer than 500 ms
//
// Run the tests: npm test -- 17-asynchronous-javascript/fetch-api

export async function loadStock(id, ms) {
    // Your code here
}
