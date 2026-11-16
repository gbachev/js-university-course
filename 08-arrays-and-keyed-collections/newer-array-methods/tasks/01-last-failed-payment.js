// Task 1: The last failed payment
// Lecture: Newer Array Methods: at(), findLast(), toSorted() and More
//
// A customer's payments are kept oldest first, each one an object like
// { id: 7, status: 'paid' }. Write two functions. latestPayment(payments) returns
// the newest payment, the last one in the array, or undefined when there are none.
// lastPaymentWithStatus(payments, status) returns the newest payment with that status,
// or undefined when no payment has it. Search from the end, and leave the array as it is.
//
// Examples:
//   const payments = [
//       { id: 1, status: 'failed' },
//       { id: 2, status: 'paid' },
//       { id: 3, status: 'failed' },
//       { id: 4, status: 'paid' }
//   ];
//   latestPayment(payments)                     // { id: 4, status: 'paid' }
//   lastPaymentWithStatus(payments, 'failed')   // { id: 3, status: 'failed' }
//   lastPaymentWithStatus(payments, 'refunded') // undefined
//
// Run the tests: npm test -- 08-arrays-and-keyed-collections/newer-array-methods

export function latestPayment(payments) {
    // Your code here
}

export function lastPaymentWithStatus(payments, status) {
    // Your code here
}
