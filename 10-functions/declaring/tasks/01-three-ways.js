// Task 1: Three ways to write a function
// Lecture: Declaring Functions
//
// Our shop needs three small helpers, and we write each one in a different form.
// itemTotal(price, quantity) is a function declaration and returns price times
// quantity. formatEuro(amount) is a function expression and returns the amount with 2
// decimals and ' EUR' after it. isExpensive(price) is an arrow function and returns
// true for a price over 100 (100 itself is not expensive).
//
// Examples:
//   itemTotal(4, 3)       // 12
//   formatEuro(12.5)      // '12.50 EUR'
//   isExpensive(150)      // true
//
// Run the tests: npm test -- 10-functions/declaring

export function itemTotal(price, quantity) {
    // Your code here
}

export const formatEuro = function(amount) {
    // Your code here
};

export const isExpensive = (price) => {
    // Your code here
};
