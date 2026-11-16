// Try to work out result, a, b and c on paper before you run this file.
let a = 3, b = 4, c = 5;
let result = ++a + b * c / 2 - a++ + 6 / (b-- + ++a - --c);

console.log(result); // 11
console.log(a, b, c); // 6 3 4
