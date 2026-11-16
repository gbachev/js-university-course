// Task 2: Check the quantity
// Lecture: throw and Error Objects
//
// checkQuantity(quantity) guards the quantity field of a cart line and returns the
// quantity when it is fine. When the quantity is not a number, it throws a TypeError
// with the message 'quantity must be a number, got <type>' (the typeof of the value).
// When it is a number below 1 or above 99, it throws a RangeError with the message
// 'quantity must be 1-99, got <quantity>'. 1 and 99 are fine.
//
// Examples:
//   checkQuantity(3)      // 3
//   checkQuantity('3')    // throws TypeError: quantity must be a number, got string
//   checkQuantity(0)      // throws RangeError: quantity must be 1-99, got 0
//
// Run the tests: npm test -- 16-error-handling-and-debugging/throw-and-error-objects

export function checkQuantity(quantity) {
    // Your code here
}
