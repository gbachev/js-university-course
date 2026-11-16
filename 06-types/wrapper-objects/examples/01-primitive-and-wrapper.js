let n1 = 10; // number primitive value
let n2 = new Number(10); // Number wrapper object

console.log('n1 -', n1); // n1 - 10
console.log('n2 -', n2); // n2 - [Number: 10]
// valueOf() gives back the primitive value of a wrapper object.
console.log('Value of n2 -', n2.valueOf()); // Value of n2 - 10
