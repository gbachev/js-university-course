function fibRecursive(n) {
    if (n < 2) {
        return n;
    }
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function fibMemo(n, memo = new Map()) {
    if (n < 2) {
        return n;
    }
    if (memo.has(n)) {
        return memo.get(n);
    }
    const result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    memo.set(n, result);
    return result;
}

function fibLoop(n) {
    let prev = 0;
    let curr = 1;
    for (let i = 0; i < n; i++) {
        [prev, curr] = [curr, prev + curr];
    }
    return prev;
}

console.log(fibRecursive(10)); // 55
console.log(fibMemo(10)); // 55
console.log(fibLoop(10)); // 55
console.log(fibLoop(0), fibLoop(1), fibLoop(2)); // 0 1 1
