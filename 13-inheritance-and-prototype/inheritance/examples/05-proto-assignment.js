// Assigning to __proto__ calls the setter, which ignores a value that is not an object.
const scores = {};

scores['__proto__'] = 10;

console.log(scores['__proto__'] === Object.prototype); // true
console.log(Object.keys(scores)); // []
