// Copy the properties together with their descriptors.
const user = {};

Object.defineProperty(user, 'name', {
    value: 'Bob',
    writable: false,
    enumerable: true,
    configurable: false
});

const clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

console.log(clone.name); // Bob
console.log(Object.getOwnPropertyDescriptor(clone, 'name').writable); // false

// A spread copy gets only the values, with the default attributes.
const spreadCopy = { ...user };
console.log(Object.getOwnPropertyDescriptor(spreadCopy, 'name').writable); // true
