const pipe = (...fns) => (x) =>
    fns.reduce((value, fn) => fn(value), x);

const trim = (s) => s.trim();
const slugify = (s) => s.toLowerCase().replace(/\s+/g, '-');

export const tap = (fn) => (value) => {
    fn(value);
    return value;
};

export const makeSlugger = (log) =>
    pipe(trim, tap((s) => log.push(s)), slugify);
