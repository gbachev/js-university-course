export function logCalls(fn, log) {
    return function (...args) {
        log.push({ name: fn.name, args });
        return fn(...args);
    };
}
