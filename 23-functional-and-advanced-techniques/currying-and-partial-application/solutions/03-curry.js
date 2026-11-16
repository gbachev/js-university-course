export function curry(fn, arity = fn.length) {
    const curried = (...args) =>
        args.length >= arity
            ? fn(...args)
            : (...more) => curried(...args, ...more);
    return curried;
}
