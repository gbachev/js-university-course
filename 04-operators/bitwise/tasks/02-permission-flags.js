// Task 2: Permission flags
// Lecture: Bitwise Operators
//
// Our document app keeps all permissions of a user in one number. Every permission is
// one bit: READ is 1 (001), WRITE is 2 (010) and DELETE is 4 (100), so a user who can
// read and write has 3 (011). Write hasPermission(userPermissions, permission), which
// returns true when that bit is set and false when it is not, and
// grantPermission(userPermissions, permission), which returns the permissions with
// that bit set. Granting a permission the user already has changes nothing.
// Hint: `&` gives a number, so we compare it with 0 to get true or false.
//
// Examples:
//   hasPermission(3, WRITE)     // true
//   hasPermission(3, DELETE)    // false
//   grantPermission(1, WRITE)   // 3
//
// Run the tests: npm test -- 04-operators/bitwise

export const READ = 1;
export const WRITE = 2;
export const DELETE = 4;

export function hasPermission(userPermissions, permission) {
    // Your code here
}

export function grantPermission(userPermissions, permission) {
    // Your code here
}
