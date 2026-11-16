// Task 3: A job queue that closes
// Lecture: Iterators
//
// Write jobQueue(jobs, log). It returns an iterable iterator over the jobs: an object
// with next(), whose [Symbol.iterator]() returns the object itself. next() hands out the
// jobs in order, then { value: undefined, done: true }. Being one iterator, it keeps a
// single position, so after one full pass it is used up. Give it a return() method too:
// it pushes 'closed' into the log array and returns { value: undefined, done: true }.
// JavaScript calls it when a loop stops early or we destructure only the first jobs, and
// not when a loop reads every job.
//
// Examples:
//   const log = [];
//   const queue = jobQueue(['email', 'resize', 'backup'], log);
//   const [first] = queue;    // 'email', and log is now ['closed']
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/iterators

export function jobQueue(jobs, log) {
    // Your code here
}
