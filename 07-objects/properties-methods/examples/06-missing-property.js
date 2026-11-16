// A property that does not exist gives undefined, not an error.
let user = {}; // empty object

console.log(user.age); // undefined
console.log(user['age']); // undefined
