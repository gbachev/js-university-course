export function fib(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new RangeError(`There is no Fibonacci number at position ${n}`);
    }
    let prev = 0n;
    let curr = 1n;
    for (let i = 0; i < n; i++) {
        [prev, curr] = [curr, prev + curr];
    }
    return prev;
}
