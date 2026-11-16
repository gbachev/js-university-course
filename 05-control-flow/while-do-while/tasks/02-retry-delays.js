// Task 2: Retry delays
// Lecture: The "while" and "do ... while" loops
//
// When a payment fails, our shop tries again later, and every next wait is twice as
// long as the one before. Write getRetryDelays(firstDelay, maxDelay): it returns an
// array of the waits in milliseconds, starting with firstDelay and doubling each
// time, while the wait is not longer than maxDelay. We always retry at least once,
// so even when firstDelay is already longer than maxDelay the array holds firstDelay.
// That is the job of a do...while loop. We add a wait at the end of the array with
// delays[delays.length] = delay. firstDelay is always above 0.
//
// Examples:
//   getRetryDelays(100, 1000)    // [100, 200, 400, 800]
//   getRetryDelays(2000, 1000)   // [2000]
//
// Run the tests: npm test -- 05-control-flow/while-do-while

export function getRetryDelays(firstDelay, maxDelay) {
    const delays = [];

    // Your code here

    return delays;
}
