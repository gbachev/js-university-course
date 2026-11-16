// Task 2: The checkout pipeline
// Lecture: Function Composition
//
// Our checkout totals a cart in steps. Write applyDiscount(rate) and addTax(rate), each
// curried so it returns a unary step: applyDiscount(0.1) takes a total and returns it
// 10% lower, addTax(0.2) returns it 20% higher. Then write checkoutTotal(discountRate,
// taxRate): it returns a function that takes a cart and runs subtotal, the discount, the
// tax and round, in this order, with pipe(). A rate of 0 changes nothing, and the cart
// array must stay as it was.
//
// Examples:
//   applyDiscount(0.1)(100)                  // 90
//   addTax(0.2)(100)                         // 120
//   checkoutTotal(0.1, 0.2)(cart)            // 34.55 for the cart in the tests
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/function-composition

export const pipe = (...fns) => (x) =>
    fns.reduce((value, fn) => fn(value), x);

export const subtotal = (items) =>
    items.reduce((sum, item) => sum + item.price * item.qty, 0);

export const round = (total) => Math.round(total * 100) / 100;

export const applyDiscount = (rate) => {
    // Your code here
};

export const addTax = (rate) => {
    // Your code here
};

export const checkoutTotal = (discountRate, taxRate) => {
    // Your code here
};
