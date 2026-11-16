// Task 1: The error report
// Lecture: Global Error Handling
//
// Our global handler sends a report of every uncaught error to the server. Write
// buildReport(error, page) that returns the report as an object with three fields:
// message (the error turned into a string with String()), stack (the stack of the
// error) and page (the address we pass in). Remember that event.error can be null and
// event.reason any value, like a plain string: then stack is undefined, and the
// function must not throw.
//
// Examples:
//   buildReport(new TypeError('order.pay is not a function'), '/checkout')
//   // { message: 'TypeError: order.pay is not a function',
//   //   stack: 'TypeError: order.pay is not a function\n    at ...', page: '/checkout' }
//   buildReport('Payment failed', '/checkout')
//   // { message: 'Payment failed', stack: undefined, page: '/checkout' }
//
// Run the tests: npm test -- 16-error-handling-and-debugging/global-error-handling

export function buildReport(error, page) {
    // Your code here
}
