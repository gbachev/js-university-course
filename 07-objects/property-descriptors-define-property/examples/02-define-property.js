// Object.defineProperty() sets the attributes of a property exactly.
const user = {};

Object.defineProperty(user, 'name', {
    value: 'John',
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(user.name); // John
console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// {
//   value: 'John',
//   writable: false,
//   enumerable: true,
//   configurable: false
// }
