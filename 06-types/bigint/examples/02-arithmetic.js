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

// The unary + cannot convert a BigInt to a number.
try {
    console.log(+a);
} catch (error) {
    // TypeError: Cannot convert a BigInt value to a number
    console.log(error.name + ': ' + error.message);
}

// JSON.stringify() cannot serialize a BigInt.
try {
    console.log(JSON.stringify({ n: 1n }));
} catch (error) {
    // TypeError: Do not know how to serialize a BigInt
    console.log(error.name + ': ' + error.message);
}
