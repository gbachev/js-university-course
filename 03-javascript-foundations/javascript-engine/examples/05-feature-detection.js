// Feature detection: check that a recent feature exists before we use it.
const hasGroupBy = typeof Object.groupBy === 'function';

console.log(hasGroupBy); // true in current browsers and Node.js, false in older ones
