// Task 3: The cached fallback
// Lecture: Promise Combinators
//
// The checkout shows live shipping options, but a slow shipping service should not
// keep the customer waiting. Write withFallback(promise, ms, fallback) with
// Promise.race(): it fulfills with the value of promise if that comes within ms
// milliseconds, and with fallback (our cached options) if the time runs out first.
// If promise rejects before the time is up, the result rejects with the same error.
//
// Examples:
//   withFallback(liveOptions, 500, ['Standard'])
//   // the live options if they arrive within 500 ms, ['Standard'] otherwise
//
// Run the tests: npm test -- 17-asynchronous-javascript/promise-combinators

export function withFallback(promise, ms, fallback) {
    // Your code here
}
