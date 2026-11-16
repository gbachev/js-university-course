// Task 2: A constant that changes
// Lecture: Variables and Functions: A First Look
//
// checkoutTotal(price, quantity, shipping) returns what the customer pays: the
// price times the quantity, plus the shipping. Calling it throws a TypeError right
// now. Find the line that causes it and fix the declaration, so the function
// returns the total. Free shipping (0) adds nothing.
//
// Examples:
//   checkoutTotal(10, 2, 5)    // 25
//   checkoutTotal(15, 3, 0)    // 45
//
// Run the tests: npm test -- 03-javascript-foundations/variables-and-functions

export function checkoutTotal(price, quantity, shipping) {
    const total = price * quantity;
    total = total + shipping;
    return total;
}
