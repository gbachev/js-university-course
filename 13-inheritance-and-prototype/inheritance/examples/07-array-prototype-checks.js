// Array.prototype is in the chain of an array, Array itself is not.
const tags = ['js', 'css'];

console.log(tags instanceof Array); // true
console.log(Array.prototype.isPrototypeOf(tags)); // true
console.log(Array.isPrototypeOf(tags)); // false
console.log(Array.prototype.isPrototypeOf(tags) === (tags instanceof Array)); // true
