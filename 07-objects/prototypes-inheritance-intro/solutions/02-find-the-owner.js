export function findOwner(obj, key) {
    let current = obj;

    // The chain ends with null, so the loop stops there.
    while (current !== null) {
        if (Object.hasOwn(current, key)) {
            return current;
        }
        current = Object.getPrototypeOf(current);
    }

    return null;
}
