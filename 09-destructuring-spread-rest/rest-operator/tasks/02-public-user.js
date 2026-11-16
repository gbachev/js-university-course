// Task 2: Hide the password
// Lecture: The Rest Operator
//
// Before we send a user to the browser, the password must not be in it. Write
// toPublicUser(user): it returns a new object with every property of the user except
// password. Use object destructuring with rest: take password out and collect the
// others. The user object we get must not change. A user without a password comes
// back with all their properties.
//
// Examples:
//   toPublicUser({ id: 1, name: 'Jane', password: 'secret123' })
//   // { id: 1, name: 'Jane' }
//
// Run the tests: npm test -- 09-destructuring-spread-rest/rest-operator

export function toPublicUser(user) {
    // Your code here
}
