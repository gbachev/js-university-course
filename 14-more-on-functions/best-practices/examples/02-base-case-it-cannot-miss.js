// Better: zero and everything below it stop the recursion.
function sumUpTo(n) {
    if (n <= 0) {
        return 0;
    }
    return n + sumUpTo(n - 1);
}

console.log(sumUpTo(4)); // 10
console.log(sumUpTo(-1)); // 0
