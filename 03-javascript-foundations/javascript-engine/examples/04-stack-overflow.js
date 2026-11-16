// A function that calls itself without stopping fills up the call stack.
function sumTo(n) {
    return n + sumTo(n - 1); // we forgot to stop at 0
}

try {
    sumTo(5);
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // RangeError: Maximum call stack size exceeded
}
