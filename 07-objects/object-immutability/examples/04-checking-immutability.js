// Object.isFrozen() and Object.isSealed() tell us what was done to an object.
const user = { name: 'John' };
Object.seal(user);

console.log(Object.isFrozen(user)); // false
console.log(Object.isSealed(user)); // true

const settings = Object.freeze({ theme: 'dark' });

console.log(Object.isFrozen(settings)); // true
console.log(Object.isSealed(settings)); // true - a frozen object is sealed too
