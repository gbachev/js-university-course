// Task 2: Build a trampoline
// Lecture: Tail Call Optimization (TCO)
//
// Write trampoline(fn). It returns a new function that calls fn with all its arguments.
// While the result is a function (a thunk), it calls that function with no arguments
// and takes its result instead. The first result that is not a function is the answer.
// Then countdownStep(n, steps) below works for any n: it uses a thunk instead of calling
// itself, so a trampolined countdown of 100,000 steps does not fill the call stack.
//
// Examples:
//   const countdown = trampoline(countdownStep);
//   countdown(3)                         // 'liftoff after 3 steps'
//   trampoline((a, b) => a + b)(2, 3)    // 5
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/tail-call-optimization

export function trampoline(fn) {
    // Your code here
}

export function countdownStep(n, steps = 0) {
    if (n === 0) {
        return `liftoff after ${steps} steps`;
    }
    return () => countdownStep(n - 1, steps + 1);
}
