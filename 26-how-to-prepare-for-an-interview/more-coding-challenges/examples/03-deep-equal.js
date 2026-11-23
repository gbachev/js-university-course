function isObject(value) {
    return typeof value === 'object' && value !== null;
}

function deepEqual(a, b) {
    if (Object.is(a, b)) {
        return true;
    }
    if (!isObject(a) || !isObject(b)) {
        return false;
    }
    if (Array.isArray(a) !== Array.isArray(b)) {
        return false;
    }
    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) {
        return false;
    }
    return keys.every((key) => {
        return Object.hasOwn(b, key) && deepEqual(a[key], b[key]);
    });
}

const saved = { theme: 'dark', tags: ['js', 'css'], user: { id: 7 } };
const draft = { user: { id: 7 }, tags: ['js', 'css'], theme: 'dark' };

console.log(saved === draft); // false
console.log(deepEqual(saved, draft)); // true
console.log(deepEqual(saved, { ...saved, tags: ['js'] })); // false
console.log(deepEqual([1, 2], { 0: 1, 1: 2 })); // false
console.log(deepEqual({ a: undefined }, { b: undefined })); // false
console.log(deepEqual({ price: NaN }, { price: NaN })); // true
