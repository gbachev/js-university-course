// Task 3: Pay only once
// Lecture: Closures
//
// A double click on Pay must not charge a customer twice. Write once(fn). It returns a
// new function: the first call runs fn with the arguments it got and returns what fn
// returned. Every later call does not run fn again and returns that first result. The
// function remembers whether fn already ran in a variable of once().
//
// Examples:
//   const pay = once((amount) => 'Charged ' + amount);
//   pay(20)   // 'Charged 20'
//   pay(20)   // 'Charged 20', and fn did not run again
//
// Run the tests: npm test -- 11-scope-and-variables/closures

export function once(fn) {
    // Your code here
}
