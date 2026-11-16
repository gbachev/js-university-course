// Better: tap logs the value and passes it on, so the pipeline keeps working.
const pipe = (...fns) => x =>
    fns.reduce((value, fn) => fn(value), x);
const tap = fn => value => {
    fn(value);
    return value;
};
const trim = s => s.trim();
const slugify = s => s.toLowerCase().replace(/\s+/g, '-');

const toSlug = pipe(trim, tap(console.log), slugify);

console.log(toSlug('  The Hobbit '));
// The Hobbit
// the-hobbit
