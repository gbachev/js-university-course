// Task 2: The call log
// Lecture: Higher-Order Functions
//
// To find out which shop functions run, and with what, we want a log of their calls.
// Write logCalls(fn, log): it returns a new function that, on every call, pushes
// { name, args } into the log array, with the name of fn and an array of all the
// arguments, then calls fn with those arguments and returns its result. Calls with no
// arguments log an empty args array. Two wrapped functions can share one log.
//
// Examples:
//   const log = [];
//   const add = logCalls(function addToCart(product) { return `${product} added`; }, log);
//   add('Book')    // 'Book added'
//   log            // [{ name: 'addToCart', args: ['Book'] }]
//
// Run the tests: npm test -- 14-more-on-functions/higher-order

export function logCalls(fn, log) {
    // Your code here
}
