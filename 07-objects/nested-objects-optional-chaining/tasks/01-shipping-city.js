// Task 1: The shipping city
// Lecture: Nested Objects and Optional Chaining
//
// Our orders look like { id: 1, customer: { name: 'Anna', address: { city: 'Sofia' } } },
// but not every order is complete: some have no customer yet, and some customers have
// no address. Write getShippingCity(order): it returns the city of the customer's
// address, or 'Unknown' when the customer, the address or the city is missing. It
// must never throw.
//
// Examples:
//   getShippingCity({ id: 1, customer: { name: 'Anna', address: { city: 'Sofia' } } })
//   // 'Sofia'
//   getShippingCity({ id: 2 })   // 'Unknown'
//
// Run the tests: npm test -- 07-objects/nested-objects-optional-chaining

export function getShippingCity(order) {
    // Your code here
}
