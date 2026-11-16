// instanceof follows the prototype chain, so the most specific checks go first.
function describe(error) {
    if (error instanceof SyntaxError) {
        return 'Broken data';
    }
    if (error instanceof TypeError) {
        return 'Bug in our code';
    }
    if (error instanceof Error) {
        return 'Other error';
    }
    return 'Not an error';
}

console.log(describe(new SyntaxError('Bad JSON'))); // Broken data
console.log(describe(new TypeError('No items'))); // Bug in our code
console.log(describe(new RangeError('Bad count'))); // Other error
console.log(describe('Invalid amount')); // Not an error
