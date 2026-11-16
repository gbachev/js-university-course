// Task 3: The missing address
// Lecture: Nested Destructuring
//
// getCity(user) returns the city from user.address, and our report calls it for every
// user. It works for most users, but some never filled in their address, and for them
// it throws a TypeError and the whole report stops. Fix it with default values in the
// destructuring: when the user has no address, or the address has no city, getCity
// returns 'Unknown'. The address itself needs a default too, an empty object, so there
// is something to look for the city in.
//
// Examples:
//   getCity({ name: 'Jane', address: { city: 'Sofia' } })   // 'Sofia'
//   getCity({ name: 'John' })                               // 'Unknown'
//   getCity({ name: 'Maria', address: { zip: '1000' } })    // 'Unknown'
//
// Run the tests: npm test -- 09-destructuring-spread-rest/nested-destructuring

export function getCity(user) {
    const {
        address: { city },
    } = user;

    return city;
}
