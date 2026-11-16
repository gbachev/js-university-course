const obj1 = { a: 1, b: 2, c: 3 };
const sameObj = obj1;

const set = new Set();

set.add(obj1);
set.add(sameObj); // Does not add a new entry since sameObj is the same reference as obj1

console.log(set.size); // 1

const obj2 = { a: 1, b: 2, c: 3 };
console.log(set.add(obj2)); // Adds a new entry since obj2 is a different reference
// Set(2) { { a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 } }

console.log(set.size); // 2
