// With a string, + concatenates. *, and the parse methods, give us numbers.
let a = 2;
let b = '3';

console.log(a + b); // 23, a is converted into a string and the two are concatenated
console.log(a * 1 + b); // 23, a * 1 is still 2, then + concatenates it with '3'
console.log(a + b * 1); // 5, b * 1 converts b into a number, then + sums
console.log(a + Number.parseInt(b)); // 5
console.log(a + Number.parseFloat(b)); // 5
console.log(a * b); // 6, * converts b into a number and multiplies
