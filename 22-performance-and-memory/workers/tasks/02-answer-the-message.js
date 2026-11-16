// Task 2: Answer the message
// Lecture: Workers
//
// One worker can do several jobs: the message says which one. Write handleMessage(data),
// the function our worker calls for every message. It returns the answer to post back:
//   { type: 'search', books, query } -> { type: 'found', books: <the books whose title
//       includes the query, ignoring upper and lower case> }
//   { type: 'count', books }         -> { type: 'counted', count: <how many books> }
//   any other type                   -> { type: 'error', message: 'Unknown task: <type>' }
// The books it gets are not changed. The page 02-answer-the-message.html runs our
// function in a real worker, so we can watch the answers come back.
//
// Examples:
//   handleMessage({ type: 'count', books: [{ title: 'Dune' }] })   // { type: 'counted', count: 1 }
//   handleMessage({ type: 'sort' })   // { type: 'error', message: 'Unknown task: sort' }
//
// Run the tests: npm test -- 22-performance-and-memory/workers

export function handleMessage(data) {
    // Your code here
}
