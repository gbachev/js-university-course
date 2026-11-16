// Considered bad practice: the bad value travels on.
function toQuantity(input) {
    return Number(input);
}

console.log(toQuantity('two') * 4.5); // NaN

// Better: check the value where it enters, say what we got.
function readQuantity(input) {
    const quantity = Number(input);
    if (!Number.isInteger(quantity) || quantity < 1) {
        throw new RangeError(
            `quantity must be a positive whole number, got "${input}"`
        );
    }
    return quantity;
}

console.log(readQuantity('3')); // 3

try {
    readQuantity('two');
} catch (error) {
    console.log(error.message);
    // quantity must be a positive whole number, got "two"
}
