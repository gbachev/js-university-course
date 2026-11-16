function deepClone(value) {
    if (value === null || typeof value !== 'object') {
        return value;
    }
    if (Array.isArray(value)) {
        return value.map((item) => deepClone(item));
    }
    const copy = {};
    for (const [key, item] of Object.entries(value)) {
        copy[key] = deepClone(item);
    }
    return copy;
}

const settings = {
    theme: 'dark',
    tags: ['js', 'css'],
    user: { name: 'Jane Doe', address: null },
};
const copy = deepClone(settings);

copy.tags.push('html');
copy.user.name = 'John Doe';
console.log(settings.tags); // [ 'js', 'css' ]
console.log(settings.user.name); // Jane Doe
console.log(copy.user.address); // null
