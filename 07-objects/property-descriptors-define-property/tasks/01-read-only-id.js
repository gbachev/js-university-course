// Task 1: A read-only id
// Lecture: Property Descriptors and Object.defineProperty
//
// Once a user is saved, their id must never change. Write addId(user, id): it adds an
// id property to the user with Object.defineProperty, so that the id cannot be changed
// or deleted, but still shows up in Object.keys() like the other properties. It
// returns the user. In strict mode (and the tests run in strict mode) changing the id
// then throws a TypeError.
//
// Examples:
//   const user = addId({ name: 'Anna' }, 42);
//   user.id                // 42
//   Object.keys(user)      // ['name', 'id']
//   user.id = 7;           // TypeError
//
// Run the tests: npm test -- 07-objects/property-descriptors-define-property

export function addId(user, id) {
    // Your code here
}
