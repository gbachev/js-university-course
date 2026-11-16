// Task 2: Fix the first arguments
// Lecture: Currying and Partial Application
//
// Write partial(fn, ...fixed). It returns a new function that calls fn with the fixed
// arguments first and the arguments of the call after them, and returns what fn returns.
// We can fix any number of arguments, even all of them, and call the new function as
// many times as we like: the arguments of one call must not stay for the next call.
// Then use partial() to build logOrder: it calls formatLog with the prefix '[order]'.
//
// Examples:
//   const bookTotal = partial(lineTotal, 20);
//   bookTotal(3, 5)          // 55
//   logOrder('Dune paid')    // '[order] Dune paid'
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/currying-and-partial-application

export function formatLog(prefix, message) {
    return `${prefix} ${message}`;
}

export function partial(fn, ...fixed) {
    // Your code here
}

export const logOrder = undefined; // Build it with partial()
