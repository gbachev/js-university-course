console.log(BigInt(true)); // 1n
console.log(BigInt(false)); // 0n
console.log(BigInt(123n)); // 123n
console.log(BigInt('')); // 0n
console.log(BigInt('12')); // 12n
console.log(BigInt([])); // 0n

// The other values throw an error, so we catch it and print it.
function tryBigInt(value) {
    try {
        console.log(BigInt(value));
    } catch (error) {
        console.log(error.name + ': ' + error.message);
    }
}

tryBigInt('abc'); // SyntaxError: Cannot convert abc to a BigInt
tryBigInt({}); // SyntaxError: Cannot convert [object Object] to a BigInt
tryBigInt([1, 2, 3]); // SyntaxError: Cannot convert 1,2,3 to a BigInt
tryBigInt(undefined); // TypeError: Cannot convert undefined to a BigInt
tryBigInt(null); // TypeError: Cannot convert null to a BigInt
tryBigInt(function(){}); // SyntaxError: Cannot convert function(){} to a BigInt
tryBigInt(Symbol()); // TypeError: Cannot convert Symbol() to a BigInt
