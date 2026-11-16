// __proto__: value in a literal sets the prototype; a computed key does not.
const defaults = { theme: 'light' };

const settings = { __proto__: defaults };
const copied = { ['__proto__']: defaults };
const ignored = { __proto__: 'dark' };

console.log(Object.getPrototypeOf(settings) === defaults); // true
console.log(Object.hasOwn(settings, '__proto__')); // false

console.log(Object.getPrototypeOf(copied) === Object.prototype); // true
console.log(Object.hasOwn(copied, '__proto__')); // true

console.log(Object.getPrototypeOf(ignored) === Object.prototype); // true
