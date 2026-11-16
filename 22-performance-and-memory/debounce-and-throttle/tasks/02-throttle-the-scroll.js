// Task 2: Throttle the scroll
// Lecture: Debounce and Throttle
//
// A reading progress bar follows the scroll position. Write throttle(fn, interval): the
// returned function runs fn right away when fn has not run in the last interval ms.
// A call that comes too soon is not lost: it waits until interval ms after the last run,
// and a newer call that comes too soon replaces it, so the last position always arrives.
// One more detail the lecture's version does not have: the throttled function returns
// true when fn ran right away, and false when the call has to wait. Use Date.now() for
// the time, like the lecture. The tests fake both the clock and the timers.
//
// Examples:
//   const logScroll = throttle((y) => console.log(y), 300);
//   logScroll(0)     // true, logs 0 right away
//   logScroll(100)   // false, called too soon: it waits
//   // calls at 0, 100, 200, 400 and 450 ms log 0 (at 0 ms), 200 (at 300 ms)
//   // and 450 (at 600 ms)
//
// Run the tests: npm test -- 22-performance-and-memory/debounce-and-throttle

export function throttle(fn, interval) {
    // Your code here
}
