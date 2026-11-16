// Strict equality: no type conversion before the comparison.
let var1 = 3;
let var2 = 4;

console.log(3 === var1); // true
console.log(var1 !== '3'); // true
console.log(3 !== '3'); // true
