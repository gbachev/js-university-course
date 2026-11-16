export const READ = 1;
export const WRITE = 2;
export const DELETE = 4;

export function revokePermission(userPermissions, permission) {
    // ~permission has every bit set except this one, so & clears only this bit.
    return userPermissions & ~permission;
}
