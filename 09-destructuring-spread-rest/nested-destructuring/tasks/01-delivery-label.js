// Task 1: The delivery label
// Lecture: Nested Destructuring
//
// An order from our shop looks like this:
//   { id: 1001, customer: { name: 'Jane Doe', address: { city: 'Sofia', zip: '1000' } } }
// Write getDeliveryLabel(order): it returns the customer's name, a comma, then the zip
// code and the city, like 'Jane Doe, 1000 Sofia'. Take the name, the city and the zip
// out of the order with one nested destructuring.
//
// Examples:
//   getDeliveryLabel({
//       id: 1001,
//       customer: { name: 'Jane Doe', address: { city: 'Sofia', zip: '1000' } },
//   })
//   // 'Jane Doe, 1000 Sofia'
//
// Run the tests: npm test -- 09-destructuring-spread-rest/nested-destructuring

export function getDeliveryLabel(order) {
    // Your code here
}
