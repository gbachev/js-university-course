// We catch the low-level error and throw a new one with context, the original attached.
function loadCart(text) {
    try {
        return JSON.parse(text);
    } catch (error) {
        throw new Error('Could not load the saved cart', {
            cause: error
        });
    }
}

try {
    loadCart('{items: []}');
} catch (error) {
    console.log(error.message); // Could not load the saved cart
    console.log(error.cause instanceof SyntaxError); // true
    console.log(error.cause.name); // SyntaxError
}
