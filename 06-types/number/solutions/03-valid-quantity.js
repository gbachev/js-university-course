export function isValidQuantity(quantity) {
    // Number.isInteger() is false for decimals, NaN, Infinity and strings.
    return Number.isInteger(quantity) && quantity >= 1 && quantity <= 99;
}
