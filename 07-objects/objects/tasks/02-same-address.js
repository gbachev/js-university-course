// Task 2: Same address?
// Lecture: Objects in JavaScript
//
// At checkout we ask if the billing address is the same as the shipping address.
// Both are objects like { street: '12 Oak St', city: 'Springfield', zip: '12345' }.
// Write isSameAddress(shipping, billing): it returns true when the street, the city
// and the zip of the two addresses are the same, and false otherwise. Remember that
// === on two objects only tells us if they are the same object, not if they hold the
// same values. Two separate objects with the same values are the same address.
//
// Examples:
//   isSameAddress(
//       { street: '12 Oak St', city: 'Springfield', zip: '12345' },
//       { street: '12 Oak St', city: 'Springfield', zip: '12345' }
//   )   // true
//
// Run the tests: npm test -- 07-objects/objects

export function isSameAddress(shipping, billing) {
    return shipping === billing;
}
