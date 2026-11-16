export function addId(user, id) {
    Object.defineProperty(user, 'id', {
        value: id,
        writable: false,
        enumerable: true,
        configurable: false,
    });

    return user;
}
