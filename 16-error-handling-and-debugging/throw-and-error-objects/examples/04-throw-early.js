// Check the arguments at the top of the function and throw with a good message.
function applyDiscount(price, percent) {
    if (typeof price !== 'number') {
        throw new TypeError(
            `price must be a number, got ${typeof price}`
        );
    }
    if (percent < 0 || percent > 100) {
        throw new RangeError(`percent must be 0-100, got ${percent}`);
    }
    return price - (price * percent) / 100;
}

console.log(applyDiscount(80, 25)); // 60

try {
    applyDiscount(80, 150);
} catch (error) {
    console.log(error.message); // percent must be 0-100, got 150
}

try {
    applyDiscount('80', 25);
} catch (error) {
    console.log(error.message); // price must be a number, got string
}
