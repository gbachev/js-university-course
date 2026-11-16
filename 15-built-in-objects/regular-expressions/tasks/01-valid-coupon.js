// Task 1: Is the coupon code valid?
// Lecture: Regular Expressions
//
// A coupon code is one or more capital letters followed by exactly two digits,
// such as 'SPRING26', and nothing else. isValidCoupon(code) returns true or false,
// but it has two bugs. It accepts a code with extra text around it, and when we
// check the same valid code twice in a row, the second answer is false. Fix the
// pattern so both problems go away. Lowercase codes are not valid.
//
// Examples:
//   isValidCoupon('SPRING26')         // true
//   isValidCoupon('Use SPRING26')     // false
//   isValidCoupon('SPRING2026')       // false
//
// Run the tests: npm test -- 15-built-in-objects/regular-expressions

const couponPattern = /[A-Z]+\d{2}/g;

export function isValidCoupon(code) {
    return couponPattern.test(code);
}
