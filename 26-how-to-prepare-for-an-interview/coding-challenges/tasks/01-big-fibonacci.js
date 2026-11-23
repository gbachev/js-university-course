// Task 1: The big Fibonacci
// Lecture: Coding Challenges
//
// The interviewer liked our memoized fib(), then asked "how large can n be?". The code
// below breaks twice: past fib(78) the numbers lose precision, and fib(10000) throws
// a RangeError because the recursion goes 10,000 calls deep. Rewrite fib(n) so it
// returns the n-th Fibonacci number as a BigInt, with a loop instead of recursion.
// fib(0) is 0n and fib(1) is 1n. For a negative n or an n that is not a whole number,
// throw a RangeError, since there is no such Fibonacci number.
//
// Examples:
//   fib(10)      // 55n
//   fib(90)      // 2880067194370816120n
//   fib(10000)   // a BigInt with 2090 digits, at once
//
// Run the tests: npm test -- 26-how-to-prepare-for-an-interview/coding-challenges

export function fib(n, memo = new Map()) {
    if (n < 2) {
        return n;
    }
    if (memo.has(n)) {
        return memo.get(n);
    }
    const result = fib(n - 1, memo) + fib(n - 2, memo);
    memo.set(n, result);
    return result;
}
