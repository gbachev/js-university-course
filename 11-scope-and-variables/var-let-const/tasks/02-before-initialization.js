// Task 2: Before initialization
// Lecture: var vs let vs const
//
// shippingCost(total) returns 0 when an order total reaches the free shipping limit of
// 50, and 4.99 otherwise. Right now every call throws a ReferenceError: Cannot access
// 'freeFrom' before initialization. The constant is read in its temporal dead zone.
// Fix it: declare each constant before its first use. Keep const, do not switch to var.
//
// Examples:
//   shippingCost(60)   // 0
//   shippingCost(50)   // 0
//   shippingCost(20)   // 4.99
//
// Run the tests: npm test -- 11-scope-and-variables/var-let-const

export function shippingCost(total) {
    if (total >= freeFrom) {
        return 0;
    }

    const freeFrom = 50;
    const standardCost = 4.99;

    return standardCost;
}
