// Task 3: A coupon with a limit
// Lecture: Higher-Order Functions
//
// once() lets a function run one time. Our coupons need more: a coupon may be used a
// set number of times. Write limitUses(fn, max): it returns a new function that calls
// fn with all its arguments and returns its result, for the first max calls. From
// then on it does not call fn any more and returns null. With a max of 0, fn never
// runs. Each wrapper counts its own uses.
//
// Examples:
//   const applyCoupon = limitUses((total) => total - 5, 2);
//   applyCoupon(40)    // 35
//   applyCoupon(20)    // 15
//   applyCoupon(30)    // null
//
// Run the tests: npm test -- 14-more-on-functions/higher-order

export function limitUses(fn, max) {
    // Your code here
}
