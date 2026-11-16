// A regex literal, and the RegExp constructor with doubled backslashes.
const literal = /\d+/;
const fromString = new RegExp('\\d+');

console.log(literal.test('Order 42')); // true
console.log(fromString.test('Order 42')); // true
console.log(literal.source === fromString.source); // true
