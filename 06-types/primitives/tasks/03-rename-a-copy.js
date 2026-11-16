// Task 3: Rename a copy
// Lecture: Primitive types
//
// On the profile page a user can preview a new name before saving it. A colleague
// wrote previewName(user, newName), which should return a new user object with the
// new name and the same email, and leave the original user as it was. But objects are
// passed by reference, so the function changes the user we passed in. Fix it: build
// and return a new object with name and email, and do not change user.
//
// Examples:
//   const user = { name: 'Jane', email: 'jane@example.com' };
//   previewName(user, 'Janet')   // { name: 'Janet', email: 'jane@example.com' }
//   user                         // still { name: 'Jane', email: 'jane@example.com' }
//
// Run the tests: npm test -- 06-types/primitives

export function previewName(user, newName) {
    user.name = newName;
    return user;
}
