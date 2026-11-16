// Two wrapper objects are two different objects, even with the same value.
let a = new Number(1);
let b = new Number(1);
let c = new String('a');
let d = new String('a');

console.log(a == b); // false
console.log(a === b); // false
console.log(c == d); // false
console.log(c === d); // false
