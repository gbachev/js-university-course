console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(123)); // true
console.log(Boolean(0n)); // false
console.log(Boolean(1n)); // true
console.log(Boolean(Number.MAX_SAFE_INTEGER)); // true
console.log(Boolean('')); // false
console.log(Boolean('abc')); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(Symbol())); // true
console.log(Boolean(function () {})); // true
