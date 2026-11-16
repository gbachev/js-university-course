// Task 3: The discount rule
// Lecture: Logical Operators
//
// Our shop gives a discount to members only: a member gets it when the order total is
// 100 or more, or when they have a coupon. getsDiscount(isMember, total, hasCoupon)
// returns true or false. Customers who are not members but have a coupon get the
// discount too, and they should not. Fix the condition so that it says what the rule
// says. A member with a coupon gets the discount on any total.
//
// Examples:
//   getsDiscount(true, 150, false)   // true
//   getsDiscount(true, 40, true)     // true
//   getsDiscount(false, 40, true)    // false
//
// Run the tests: npm test -- 04-operators/logical

export function getsDiscount(isMember, total, hasCoupon) {
    return isMember && total >= 100 || hasCoupon;
}
