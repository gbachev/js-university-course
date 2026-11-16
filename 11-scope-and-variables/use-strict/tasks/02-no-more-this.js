// Task 2: No more this
// Lecture: 'use strict'
//
// fullName(user) should return the first and the last name of a user with a space
// between them. It calls formatName() on its own, without an object before the dot. In
// sloppy mode this would be the global object there, and in our strict module it is
// undefined, so the call throws a TypeError. Fix it without this: pass the user to
// formatName() as a parameter.
//
// Examples:
//   fullName({ firstName: 'Ada', lastName: 'Lovelace' })   // 'Ada Lovelace'
//
// Run the tests: npm test -- 11-scope-and-variables/use-strict

function formatName() {
    return this.firstName + ' ' + this.lastName;
}

export function fullName(user) {
    return formatName();
}
