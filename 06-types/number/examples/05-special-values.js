const bigNumber = 99999999999999999999;
const str = 'some string';
let negativeInfinity = -1;
let positiveInfinity = 1;

for (let i = 0; i < 100; i++) negativeInfinity *= bigNumber;
for (let i = 0; i < 100; i++) positiveInfinity *= bigNumber;

console.log(negativeInfinity); // -Infinity
console.log(positiveInfinity); // Infinity
console.log(1 / 0); // Infinity
console.log(Number(str)); // NaN
console.log(0 / 0); // NaN

// The global isNaN() converts its argument to a number first, Number.isNaN() does not.
console.log(isNaN('abc')); // true, 'abc' is converted to NaN first
console.log(Number.isNaN('abc')); // false, 'abc' is a string, not NaN
