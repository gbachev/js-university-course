// Task 1: Return, don't print
// Lecture: Variables and Functions: A First Look
//
// The shop needs the price of one line of the cart: a book's price times how many
// copies we buy. lineTotal(price, quantity) below computes it, but the tests get
// undefined back. Fix the function so that it returns the line total instead of
// printing it. A quantity of 0 gives a total of 0.
//
// Examples:
//   lineTotal(10, 3)    // 30
//   lineTotal(25, 1)    // 25
//
// Run the tests: npm test -- 03-javascript-foundations/variables-and-functions

export function lineTotal(price, quantity) {
    console.log(price * quantity);
}
