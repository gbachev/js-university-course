let a = 10n;
let b = 5n;
let c = 5;

console.log(a + b); // 15n
console.log(a - b); // 5n
console.log(a * b); // 50n
console.log(a / b); // 2n
console.log(a % b); // 0n

// BigInt and Number cannot be mixed in arithmetic.
try {
    console.log(a + c);
} catch (error) {
    // TypeError: Cannot mix BigInt and other types, use explicit conversions
    console.log(error.name + ': ' + error.message);
}
