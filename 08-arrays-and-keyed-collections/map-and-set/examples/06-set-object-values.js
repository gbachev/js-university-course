const obj1 = { a: 1, b: 2, c: 3 };
const sameObj = obj1;

const set = new Set();

set.add(obj1);
set.add(sameObj); // Not added - same reference as obj1

console.log(set.size); // 1

const obj2 = { a: 1, b: 2, c: 3 };
set.add(obj2); // Added - a different reference

console.log(set.size); // 2
