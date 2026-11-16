// Task 3: Coupon factories
// Lecture: Private Fields and Static Properties
//
// Our shop has two kinds of coupons: a percent off and a fixed amount off. Write the
// Coupon class with two static factories, Coupon.percent(value) and
// Coupon.fixed(value). Each coupon keeps its kind and value in the private fields
// #kind and #value. apply(total) returns the total after the discount, never below 0.
// A static Coupon.isCoupon(object) returns true only for objects the class built, so
// a plain object that copies the shape of a coupon is not one.
//
// Examples:
//   Coupon.percent(10).apply(50)       // 45
//   Coupon.fixed(5).apply(20)          // 15
//   Coupon.fixed(5).apply(3)           // 0
//   Coupon.isCoupon({ apply() {} })    // false
//
// Run the tests: npm test -- 13-inheritance-and-prototype/private-fields-and-static-properties

export class Coupon {
    // Your code here
}
