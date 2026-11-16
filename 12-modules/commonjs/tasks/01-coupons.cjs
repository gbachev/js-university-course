// Task 1: Coupons that export nothing
// Lecture: CommonJS
//
// This CommonJS module of the shop knows the coupon codes. findCoupon(code) returns the
// discount rate of a code, or 0 for a code we do not know. applyCoupon(price, code)
// returns the price after the discount. The two functions work, yet every file that
// requires this module gets an empty object, and nothing warns us. Fix the export so
// require() returns both functions. The coupon codes stay private to the file.
//
// Examples:
//   findCoupon('HELLO10')         // 0.1
//   findCoupon('FREE')            // 0
//   applyCoupon(50, 'HELLO10')    // 45
//
// Run the tests: npm test -- 12-modules/commonjs

const coupons = {
    HELLO10: 0.1,
    STUDENT20: 0.2,
};

function findCoupon(code) {
    return coupons[code] ?? 0;
}

function applyCoupon(price, code) {
    return price * (1 - findCoupon(code));
}

exports = { findCoupon, applyCoupon };
