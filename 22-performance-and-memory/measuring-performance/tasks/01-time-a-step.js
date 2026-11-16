// Task 1: Time a step
// Lecture: Measuring Performance
//
// We want to time any step of our import, like removing duplicates, and keep the result
// as data. Write timeStep(name, fn): it sets a mark called `${name}-start`, calls fn(),
// records a measure called name from that mark until now, and returns what fn() returned.
// When fn() throws, the error still reaches the caller, and the measure is recorded anyway.
//
// Examples:
//   timeStep('unique', () => [1, 2, 3].length)   // 3
//   performance.getEntriesByName('unique', 'measure').length   // 1
//   performance.getEntriesByName('unique-start', 'mark').length   // 1
//
// Run the tests: npm test -- 22-performance-and-memory/measuring-performance

export function timeStep(name, fn) {
    // Your code here
}
