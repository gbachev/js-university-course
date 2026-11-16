// Task 2: The newsletter report
// Lecture: Promise Combinators
//
// Write sendNewsletters(recipients, send). recipients is an array of email
// addresses, and send(email) returns a promise that fulfills when the email goes out
// or rejects with an Error. Send all of them at once and wait for every one with
// Promise.allSettled(), so one bad address does not hide the rest. The promise we
// return fulfills with a report { sent, failed }: sent lists the addresses that went
// out, failed lists { email, reason } with the error message, both in input order.
// It never rejects. An empty list gives { sent: [], failed: [] }.
//
// Examples:
//   sendNewsletters(['jane.doe@example.com', 'sales.example.com'], send)
//   // { sent: ['jane.doe@example.com'],
//   //   failed: [{ email: 'sales.example.com', reason: 'Invalid address' }] }
//
// Run the tests: npm test -- 17-asynchronous-javascript/promise-combinators

export function sendNewsletters(recipients, send) {
    // Your code here
}
