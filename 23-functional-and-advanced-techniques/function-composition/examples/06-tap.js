// tap() logs the value in the middle of a pipeline and passes it on unchanged.
const pipe = (...fns) => x =>
    fns.reduce((value, fn) => fn(value), x);
const tap = fn => value => {
    fn(value);
    return value;
};

const trim = s => s.trim();
const slugify = s => s.toLowerCase().replace(/\s+/g, '-');

const toSlug = pipe(trim, tap(console.log), slugify);

const slug = toSlug('  The Hobbit '); // The Hobbit (from tap)
console.log(slug); // the-hobbit
