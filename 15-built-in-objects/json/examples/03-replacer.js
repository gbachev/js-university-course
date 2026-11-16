// The replacer: an array of keys to keep, or a function that decides for every value.
const user = { id: 7, name: 'Jane Doe', password: 's3cret', visits: 9007199254740993n };

console.log(JSON.stringify(user, ['id', 'name'])); // {"id":7,"name":"Jane Doe"}

const safe = JSON.stringify(user, (key, value) => {
    if (key === 'password') {
        return undefined;
    }
    if (typeof value === 'bigint') {
        return value.toString();
    }
    return value;
});

console.log(safe); // {"id":7,"name":"Jane Doe","visits":"9007199254740993"}
