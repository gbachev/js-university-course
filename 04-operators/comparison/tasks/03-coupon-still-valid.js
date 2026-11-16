// Task 3: Is the coupon still valid?
// Lecture: Comparison Operators
//
// Our coupons store their last valid day as a string like '2026-11-30' (year, month,
// day). Write isCouponValid(today, expiresOn), where both are such strings: it returns
// true when today is on or before expiresOn, and false when the coupon has expired.
// Strings are compared character by character, and with this date format that gives
// us the right order. The coupon still works on its last day.
//
// Examples:
//   isCouponValid('2026-11-16', '2026-11-30')   // true
//   isCouponValid('2026-11-30', '2026-11-30')   // true
//   isCouponValid('2026-12-01', '2026-11-30')   // false
//
// Run the tests: npm test -- 04-operators/comparison

export function isCouponValid(today, expiresOn) {
    // Your code here
}
