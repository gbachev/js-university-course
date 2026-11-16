export const pipe = (...fns) => (x) =>
    fns.reduce((value, fn) => fn(value), x);

export const compose = (...fns) => (x) =>
    fns.reduceRight((value, fn) => fn(value), x);
