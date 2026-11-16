// Task 3: The public profile
// Lecture: Other Operators
//
// Before we send a user to the browser, we remove what nobody else should see. Write
// two functions. hasField(user, field) returns true when the user object has a
// property with that name and false when it does not. toPublicProfile(user) removes
// the password property from the user object and returns the same object. A user
// without a password is returned as it is.
//
// Examples:
//   hasField({ name: 'John Doe' }, 'name')    // true
//   hasField({ name: 'John Doe' }, 'email')   // false
//   toPublicProfile({ name: 'John Doe', password: 'secret' })   // { name: 'John Doe' }
//
// Run the tests: npm test -- 04-operators/other

export function hasField(user, field) {
    // Your code here
}

export function toPublicProfile(user) {
    // Your code here
}
