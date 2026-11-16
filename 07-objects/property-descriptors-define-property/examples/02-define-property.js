// Object.defineProperty() sets the attributes of a property exactly.
const user = {};

Object.defineProperty(user, 'name', {
    value: 'Bob',
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(user.name); // Bob
console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// {
//   value: 'Bob',
//   writable: false,
//   enumerable: true,
//   configurable: false
// }
