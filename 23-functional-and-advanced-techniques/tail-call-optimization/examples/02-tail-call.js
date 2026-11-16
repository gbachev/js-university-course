// A tail call with an accumulator. Node has no TCO, so it still overflows here.
function sumTail(n, acc = 0) {
    if (n === 0) {
        return acc;
    }
    return sumTail(n - 1, acc + n); // nothing left to do after it
}

console.log(sumTail(4)); // 10
try {
    console.log(sumTail(100_000));
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // RangeError: Maximum call stack size exceeded
}
