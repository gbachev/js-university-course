// Task 3: The curry helper
// Lecture: Currying and Partial Application
//
// Write curry(fn, arity). The curried function collects arguments over one or more calls
// and calls fn once it has at least arity of them, returning fn's result. Until then it
// returns a new function. A call may pass one argument or several. When we leave out
// arity, it is fn.length, so for a function with a default parameter we pass the full
// count ourselves. A partly filled function can be reused: it starts from the same
// arguments every time.
//
// Examples:
//   const shipping = curry((weight, country, express = false) => ..., 3);
//   shipping(2)('BG')(true)    // the result of the function
//   shipping(2, 'BG')(true)    // the same
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/currying-and-partial-application

export function curry(fn, arity) {
    // Your code here
}
