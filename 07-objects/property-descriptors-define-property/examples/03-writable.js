// writable: false - the value cannot be changed.
const user = {};

Object.defineProperty(user, 'name', {
    value: 'Bob',
    writable: false,
    enumerable: true,
    configurable: false
});

// Our example files are modules, which run in strict mode, so the assignment throws.
// Outside strict mode it would fail silently.
try {
    user.name = 'Charlie';
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
}

console.log(user.name); // Bob
