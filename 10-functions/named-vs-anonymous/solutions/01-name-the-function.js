export function functionLabel(fn) {
    // An anonymous function has an empty string as its name, and '' is falsy.
    return fn.name || 'anonymous';
}
