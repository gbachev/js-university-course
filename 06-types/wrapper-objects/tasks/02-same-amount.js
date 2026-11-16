// Task 2: Same amount?
// Lecture: Boxing and Wrapper Objects
//
// We compare the amount a customer paid with the amount of the invoice. Either of them
// can be a plain number or a Number wrapper object. isSameAmount(paid, invoiced)
// should return true when the two amounts have the same value, but two wrapper
// objects with the same value are never equal, so it returns false for them. Fix it:
// compare the primitive values with ===, so the number 50 and the string '50' are
// still not the same amount.
//
// Examples:
//   isSameAmount(new Number(50), new Number(50))   // true
//   isSameAmount(50, new Number(50))               // true
//   isSameAmount(50, '50')                         // false
//
// Run the tests: npm test -- 06-types/wrapper-objects

export function isSameAmount(paid, invoiced) {
    return paid === invoiced;
}
