// A basic deep clone: copy every level by calling the function again for nested values.
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;

    if (Array.isArray(obj)) {
        return obj.map(deepClone);
    }

    const copy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key]);
        }
    }
    return copy;
}

let original = { person: { name: 'John Doe' } };
let copy = deepClone(original);
copy.person.name = 'Jane Doe';

console.log(original.person.name); // John Doe
