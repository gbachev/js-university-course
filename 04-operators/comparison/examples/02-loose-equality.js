// Loose equality: JavaScript converts the operands before it compares them.
let var1 = 3;
let var2 = 4;

console.log(3 == var1); // true
console.log('3' == var1); // true
console.log(3 == '3'); // true
console.log(var1 != 4); // true
console.log(var2 != '3'); // true
