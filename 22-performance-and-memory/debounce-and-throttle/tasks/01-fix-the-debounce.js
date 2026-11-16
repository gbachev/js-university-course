// Task 1: Fix the debounce
// Lecture: Debounce and Throttle
//
// Our search box should send one request once the user stops typing for 300 ms, but this
// debounce(fn, delay) sends one request per key: every call schedules its own run. Fix
// it, so that fn runs once, delay ms after the last call, with the arguments of that last
// call. A pause longer than delay ends a burst, so two bursts give two runs.
//
// Examples:
//   const search = debounce((query) => console.log(query), 300);
//   search('D'); search('Du'); search('Dune');
//   // 300 ms after the last call: Dune, and nothing else
//
// Run the tests: npm test -- 22-performance-and-memory/debounce-and-throttle

export function debounce(fn, delay) {
    let timerId;
    return (...args) => {
        timerId = setTimeout(() => fn(...args), delay);
    };
}
