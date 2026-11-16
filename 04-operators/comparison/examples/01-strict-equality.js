// Strict equality: no type conversion before the comparison.
var var1 = 3;
var var2 = 4;

console.log(3 === var1); // true
console.log(var1 !== '3'); // true
console.log(3 !== '3'); // true
