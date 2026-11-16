export function hasField(user, field) {
    return field in user;
}

export function toPublicProfile(user) {
    delete user.password;
    return user;
}
