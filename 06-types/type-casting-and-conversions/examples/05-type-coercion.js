console.log('The number is ' + 5); // The number is 5, 5 is converted to a string
console.log('The answer is ' + true); // The answer is true, true is converted to a string
console.log('6' / '2'); // 3, both strings are converted to numbers
console.log('5' - true); // 4, '5' becomes 5 and true becomes 1
console.log(1 + 2 + '3'); // 33, 1 + 2 is 3, then '3' is a string, so they are concatenated
console.log('hello' * 2); // NaN, 'hello' cannot be converted to a number
console.log(undefined + 1); // NaN, undefined is converted to NaN
if ('') console.log('true'); // does not print anything, because '' is falsy
console.log(!'world'); // false, because 'world' is truthy
console.log(NaN === NaN); // false, NaN is not equal to anything, not even itself
console.log(Number.isNaN(NaN)); // true
