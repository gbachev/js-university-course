export function once(fn) {
    let called = false;
    let result;
    return function (...args) {
        if (!called) {
            // Set before the call, so a fn that calls us again does not run twice.
            called = true;
            result = fn.apply(this, args);
        }
        return result;
    };
}
