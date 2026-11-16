// Task 1: Out of stock
// Lecture: Custom Error Types
//
// The shop throws an OutOfStockError when we order more than the warehouse has. It
// works, but in the logs it says "Error: Only 2 left of sku-7", and the code that
// catches it cannot read which product it was. Change the class so its name is
// 'OutOfStockError' and it keeps the sku and the available amount as the fields
// sku and available. It must still be an Error.
//
// Examples:
//   const error = new OutOfStockError('sku-7', 2);
//   String(error)                      // 'OutOfStockError: Only 2 left of sku-7'
//   error.sku, error.available         // 'sku-7' 2
//
// Run the tests: npm test -- 16-error-handling-and-debugging/custom-error-types

export class OutOfStockError extends Error {
    constructor(sku, available) {
        super(`Only ${available} left of ${sku}`);
    }
}
