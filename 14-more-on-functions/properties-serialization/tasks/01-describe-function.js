// Task 1: Describe a plugin
// Lecture: Function Properties and Serialization
//
// Our shop loads small plugin functions, and the admin page lists them for the
// developers. Write describeFunction(fn): it returns the name of the function and
// how many parameters it expects, read from its name and length properties, as
// 'calcTotal(2)'. A function with an empty name shows as 'anonymous'. Remember what
// length counts: it stops at the first default parameter and skips a rest parameter.
//
// Examples:
//   function calcTotal(items, currency) {}
//   describeFunction(calcTotal)            // 'calcTotal(2)'
//   describeFunction(calcTotal.bind(null)) // 'bound calcTotal(2)'
//   describeFunction([() => {}][0])        // 'anonymous(0)'
//
// Run the tests: npm test -- 14-more-on-functions/properties-serialization

export function describeFunction(fn) {
    // Your code here
}
