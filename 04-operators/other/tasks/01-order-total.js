// Task 1: The order total
// Lecture: Other Operators
//
// Our checkout adds the shipping cost to the subtotal. The subtotal is a number, but
// the shipping cost comes from a form field, so it can be a string like '5'.
// orderTotal(subtotal, shipping) should return the sum as a number, but for a
// subtotal of 40 and shipping '5' it returns '405'. Fix it so that the function works
// both when shipping is a string and when it is already a number.
//
// Examples:
//   orderTotal(40, '5')   // 45
//   orderTotal(40, 5)     // 45
//
// Run the tests: npm test -- 04-operators/other

export function orderTotal(subtotal, shipping) {
    return subtotal + shipping;
}
