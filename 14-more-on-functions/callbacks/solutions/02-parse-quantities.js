export function parseQuantities(values) {
    // The arrow function passes only the value, with the radix we choose.
    return values.map((value) => parseInt(value, 10));
}
