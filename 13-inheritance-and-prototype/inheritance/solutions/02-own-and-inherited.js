export function splitKeys(obj) {
    const own = [];
    const inherited = [];

    // for...in walks the whole chain, Object.hasOwn() tells the two kinds apart.
    for (const key in obj) {
        if (Object.hasOwn(obj, key)) {
            own.push(key);
        } else {
            inherited.push(key);
        }
    }

    return { own, inherited };
}
