export function toPublicUser(user) {
    const { password, ...publicUser } = user;

    return publicUser;
}
