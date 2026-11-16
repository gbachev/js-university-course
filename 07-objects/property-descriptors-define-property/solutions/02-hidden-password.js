export function attachPasswordHash(user, hash) {
    Object.defineProperty(user, 'passwordHash', {
        value: hash,
        enumerable: false,
    });

    return user;
}
