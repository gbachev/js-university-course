// A BigInt literal ends with n. BigInt() takes a number or a string.
let a = 12345n;
let b = BigInt(12345);
console.log(a, b); // 12345n 12345n

console.log(typeof a); // bigint
