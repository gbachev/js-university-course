// The recursive calls must go through the memoized function.
function memoize(fn) {
    const cache = new Map();

    return (arg) => {
        if (cache.has(arg)) {
            return cache.get(arg);
        }
        const result = fn(arg);
        cache.set(arg, result);
        return result;
    };
}

let calls = 0;

function slowFib(n) {
    calls++;
    return n < 2 ? n : slowFib(n - 1) + slowFib(n - 2);
}

console.log(slowFib(30)); // 832040
console.log(calls); // 2692537

calls = 0;
const fib = memoize((n) => {
    calls++;
    return n < 2 ? n : fib(n - 1) + fib(n - 2);
});

console.log(fib(30)); // 832040
console.log(calls); // 31
console.log(fib(70)); // 190392490709135
console.log(calls); // 71
