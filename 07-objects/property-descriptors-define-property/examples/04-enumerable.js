// enumerable: false - the property is left out of loops, Object.keys() and JSON.
const user = {};

Object.defineProperty(user, 'name', {
    value: 'Bob',
    writable: false,
    enumerable: true,
    configurable: false
});

Object.defineProperty(user, 'hidden', {
    value: 'secret',
    enumerable: false
});

console.log(Object.keys(user)); // [ 'name' ]
console.log(JSON.stringify(user)); // {"name":"Bob"}
console.log(user.hidden); // secret - it is still there when we ask for it
