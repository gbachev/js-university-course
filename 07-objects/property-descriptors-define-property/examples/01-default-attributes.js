// A property added with a plain assignment gets these default attributes.
const user = { name: 'John' };

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// { value: 'John', writable: true, enumerable: true, configurable: true }
