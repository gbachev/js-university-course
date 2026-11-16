// A correct base case is not enough: 100,000 calls fill the call stack.
function sum(n) {
    if (n === 0) {
        return 0; // base case: nothing left to add
    }
    return n + sum(n - 1); // a smaller problem
}

console.log(sum(4)); // 10
console.log(sum(1_000)); // 500500
try {
    console.log(sum(100_000));
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // RangeError: Maximum call stack size exceeded
}
