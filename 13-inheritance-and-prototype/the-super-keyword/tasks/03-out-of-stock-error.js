// Task 3: An out-of-stock error
// Lecture: The super Keyword
//
// When a customer orders more than we have, our shop should throw an error the
// checkout can recognize. Write the class OutOfStockError, which extends Error. Its
// constructor takes title, requested and available, passes a message like
// 'Only 2 of Desk lamp left, 5 requested' to Error, sets name to 'OutOfStockError'
// and keeps the three values as fields.
//
// Examples:
//   const error = new OutOfStockError('Desk lamp', 5, 2);
//   error.message                     // 'Only 2 of Desk lamp left, 5 requested'
//   String(error)                     // 'OutOfStockError: Only 2 of Desk lamp left, 5 requested'
//   error instanceof Error            // true
//   error.available                   // 2
//
// Run the tests: npm test -- 13-inheritance-and-prototype/the-super-keyword

export class OutOfStockError {
    // Your code here
}
