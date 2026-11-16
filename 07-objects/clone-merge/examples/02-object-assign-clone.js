// Object.assign(target, ...sources) copies the own enumerable properties into target.
// With an empty object as the target, we get a copy.
let original = { name: 'John Doe', age: 30 };
let copy = Object.assign({}, original);

console.log(copy); // { name: 'John Doe', age: 30 }
console.log(copy === original); // false - a new object
