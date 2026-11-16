// Float16Array is from ES2025: it needs Node 24 or a current browser.
// Node 22 throws a ReferenceError (Float16Array is not defined).
const weights = new Float16Array([1.5, 0.1]);

console.log(weights.BYTES_PER_ELEMENT); // 2
console.log(weights[0]); // 1.5
console.log(weights[1]); // 0.0999755859375
