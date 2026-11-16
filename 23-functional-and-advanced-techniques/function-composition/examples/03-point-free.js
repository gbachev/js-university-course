// The same function with a named argument and in point-free style.
const pipe = (...fns) => x =>
    fns.reduce((value, fn) => fn(value), x);
const trim = s => s.trim();
const toLowerCase = s => s.toLowerCase();

const normalizeTag = tag => toLowerCase(trim(tag));
const normalizeTagPointFree = pipe(trim, toLowerCase);

console.log(normalizeTag('  JavaScript ')); // javascript
console.log(normalizeTagPointFree('  JavaScript ')); // javascript
