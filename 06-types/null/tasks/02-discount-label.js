// Task 2: Discount label
// Lecture: null
//
// Each product has a discount in percent, or null when no discount was ever set.
// discountLabel(discount) returns 'No discount' for null and a label like '20% off'
// for a number. A discount of 0 is set on purpose (a sale that has ended), so it
// shows '0% off'. Right now the function shows 'No discount' for 0 too, because it
// checks for any falsy value. Fix it so only null gives 'No discount'.
//
// Examples:
//   discountLabel(20)     // '20% off'
//   discountLabel(null)   // 'No discount'
//   discountLabel(0)      // '0% off'
//
// Run the tests: npm test -- 06-types/null

export function discountLabel(discount) {
    if (!discount) {
        return 'No discount';
    }
    return discount + '% off';
}
