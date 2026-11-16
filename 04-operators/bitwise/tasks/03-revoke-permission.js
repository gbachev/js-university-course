// Task 3: Revoke a permission
// Lecture: Bitwise Operators
//
// The same permissions as in task 2: READ is 1, WRITE is 2 and DELETE is 4.
// revokePermission(userPermissions, permission) returns the permissions with that one
// bit cleared, and every other bit as it was. It works for a permission the user has,
// but an admin who revoked DELETE from a reader just gave the reader DELETE. Fix it:
// revoking a permission the user does not have must change nothing. Bitwise NOT turns
// every bit around, which may come in handy.
//
// Examples:
//   revokePermission(7, DELETE)   // 3
//   revokePermission(1, DELETE)   // 1
//
// Run the tests: npm test -- 04-operators/bitwise

export const READ = 1;
export const WRITE = 2;
export const DELETE = 4;

export function revokePermission(userPermissions, permission) {
    return userPermissions ^ permission;
}
