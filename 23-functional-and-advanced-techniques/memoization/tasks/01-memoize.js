// Task 1: Remember the shipping quote
// Lecture: Memoization
//
// Asking the carrier for a shipping quote is slow, and customers check the same postcode
// again and again. Write memoize(fn) for functions of one argument: it returns a new
// function that calls fn only the first time it sees an argument, keeps the result in a
// Map, and returns the kept result for the same argument later. Results like 0, '' and
// undefined must be remembered too, so check the Map with has(), not by its value.
//
// Examples:
//   const quote = memoize(askCarrier);
//   quote('1000')    // calls askCarrier('1000')
//   quote('1000')    // the same result, without calling askCarrier
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/memoization

export function memoize(fn) {
    // Your code here
}
