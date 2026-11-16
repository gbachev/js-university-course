export function hasRole(user, role) {
    // instanceof needs a constructor; isPrototypeOf() works with any object.
    return role.isPrototypeOf(user);
}
