// A trampoline keeps calling thunks until it gets a value that is not a function.
function trampoline(fn) {
    return (...args) => {
        let result = fn(...args);
        while (typeof result === 'function') {
            result = result(); // run the next step
        }
        return result;
    };
}

function sumStep(n, acc = 0) {
    if (n === 0) {
        return acc;
    }
    return () => sumStep(n - 1, acc + n); // a thunk
}

const sumSafe = trampoline(sumStep);

console.log(sumSafe(4)); // 10
console.log(sumSafe(100_000)); // 5000050000
