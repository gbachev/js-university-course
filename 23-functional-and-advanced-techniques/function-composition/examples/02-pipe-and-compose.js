// pipe() runs the steps left to right, compose() right to left.
const pipe = (...fns) => x =>
    fns.reduce((value, fn) => fn(value), x);
const compose = (...fns) => x =>
    fns.reduceRight((value, fn) => fn(value), x);

const trim = s => s.trim();
const collapseSpaces = s => s.replace(/\s+/g, ' ');
const capitalize = word => word[0].toUpperCase() + word.slice(1);
const titleCase = s =>
    s.toLowerCase().split(' ').map(capitalize).join(' ');

const formatTitle = pipe(trim, collapseSpaces, titleCase);
const sameFormat = compose(titleCase, collapseSpaces, trim);

console.log(formatTitle('  the   HOBBIT ')); // The Hobbit
console.log(sameFormat('  the   HOBBIT ')); // The Hobbit
