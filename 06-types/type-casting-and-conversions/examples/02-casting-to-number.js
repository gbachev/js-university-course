console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(123n)); // 123
console.log(Number('')); // 0
console.log(Number('12')); // 12
console.log(Number('abc')); // NaN
console.log(Number({})); // NaN
console.log(Number([])); // 0
console.log(Number([1, 2, 3])); // NaN
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(function () {})); // NaN

// A Symbol cannot be converted to a number.
try {
    console.log(Number(Symbol()));
} catch (error) {
    // TypeError: Cannot convert a Symbol value to a number
    console.log(error.name + ': ' + error.message);
}
