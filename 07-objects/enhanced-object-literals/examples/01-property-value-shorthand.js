// Property value shorthand: { name, age } is { name: name, age: age }.
const name = 'John';
const age = 30;

// Instead of { name: name, age: age }
const user = { name, age };

console.log(user); // { name: 'John', age: 30 }
