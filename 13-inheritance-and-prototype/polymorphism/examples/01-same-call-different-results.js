// One call, four results: each prototype has its own toString().
const values = [[1, 2, 3], { id: 42 }, 3.5, true];

for (const value of values) {
    console.log(value.toString());
}
// 1,2,3
// [object Object]
// 3.5
// true

console.log(Object.hasOwn(Array.prototype, 'toString')); // true
console.log(Object.hasOwn(Number.prototype, 'toString')); // true
