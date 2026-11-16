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
