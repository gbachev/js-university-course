export function trampoline(fn) {
    return (...args) => {
        let result = fn(...args);
        while (typeof result === 'function') {
            result = result();
        }
        return result;
    };
}

export function countdownStep(n, steps = 0) {
    if (n === 0) {
        return `liftoff after ${steps} steps`;
    }
    return () => countdownStep(n - 1, steps + 1);
}
