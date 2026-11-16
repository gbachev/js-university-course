// Task 3: Is it in the family?
// Lecture: Inheritance
//
// Our app builds roles as a chain of plain objects: an editor inherits from a member,
// and each user inherits from a role. A colleague wrote hasRole(user, role) to check
// whether role is somewhere in the chain of user, but it throws a TypeError for every
// role. Fix it. It returns true when role is anywhere up the chain of user, and false
// otherwise, also when the two are swapped and when user is the role itself.
//
// Examples:
//   const member = { canRead: true };
//   const editor = { __proto__: member, canEdit: true };
//   const jane = { __proto__: editor, name: 'Jane Doe' };
//   hasRole(jane, member)    // true
//   hasRole(member, jane)    // false
//
// Run the tests: npm test -- 13-inheritance-and-prototype/inheritance

export function hasRole(user, role) {
    return user instanceof role;
}
