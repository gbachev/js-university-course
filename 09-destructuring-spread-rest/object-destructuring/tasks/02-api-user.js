// Task 2: Users from the API
// Lecture: Object Destructuring
//
// The API of our shop sends users with names like { user_name, user_email, user_role },
// but the rest of our code uses name, email and role. Write toUser(apiUser): it returns
// a new object { name, email, role } with the values of the API user. Use renaming in
// the destructuring. The API leaves out user_role for ordinary customers, so a missing
// role becomes 'customer'. Any other property the API sends is not copied.
//
// Examples:
//   toUser({ user_name: 'Jane', user_email: 'jane@example.com', user_role: 'admin' })
//   // { name: 'Jane', email: 'jane@example.com', role: 'admin' }
//   toUser({ user_name: 'John', user_email: 'john@example.com' })
//   // { name: 'John', email: 'john@example.com', role: 'customer' }
//
// Run the tests: npm test -- 09-destructuring-spread-rest/object-destructuring

export function toUser(apiUser) {
    // Your code here
}
