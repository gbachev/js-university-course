// Task 1: Pipe and compose
// Lecture: Function Composition
//
// Write pipe(...fns) and compose(...fns). Each takes any number of one-argument
// functions and returns a new function that takes a value. pipe() runs the steps left
// to right, so the output of one is the input of the next. compose() runs them right to
// left, like nested calls. With no steps at all, both return the value unchanged.
//
// Examples:
//   const trim = (s) => s.trim();
//   const upper = (s) => s.toUpperCase();
//   pipe(trim, upper)('  dune ')       // 'DUNE'
//   compose(upper, trim)('  dune ')    // 'DUNE'
//   pipe()('Emma')                     // 'Emma'
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/function-composition

export const pipe = (...fns) => {
    // Your code here
};

export const compose = (...fns) => {
    // Your code here
};
