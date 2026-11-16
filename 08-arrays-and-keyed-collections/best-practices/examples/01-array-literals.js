// Good
const arr = [1, 2, 3];
console.log(arr); // [ 1, 2, 3 ]

// Avoid: the constructor reads one number as a length, not as an element
const fromConstructor = new Array(1, 2, 3);
const oneNumber = new Array(5);
console.log(fromConstructor); // [ 1, 2, 3 ]
console.log(oneNumber); // [ <5 empty items> ]
