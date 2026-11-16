export const READ = 1;
export const WRITE = 2;
export const DELETE = 4;

export function hasPermission(userPermissions, permission) {
    // & keeps only the bit we ask about; it is 0 when the user does not have it.
    return (userPermissions & permission) !== 0;
}

export function grantPermission(userPermissions, permission) {
    return userPermissions | permission;
}
