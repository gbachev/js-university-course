// Task 2: Count the calls
// Lecture: Function Properties and Serialization
//
// To see how often our checkout recalculates prices, we want a counter on the
// function itself, like a test mock has. Write countCalls(fn): it returns a new
// function that calls fn with all its arguments and returns its result. The new
// function has a calls property that starts at 0 and goes up by 1 on every call.
// Each counted function keeps its own count.
//
// Examples:
//   const countedTotal = countCalls((a, b) => a + b);
//   countedTotal.calls        // 0
//   countedTotal(10, 5)       // 15
//   countedTotal.calls        // 1
//
// Run the tests: npm test -- 14-more-on-functions/properties-serialization

export function countCalls(fn) {
    // Your code here
}
