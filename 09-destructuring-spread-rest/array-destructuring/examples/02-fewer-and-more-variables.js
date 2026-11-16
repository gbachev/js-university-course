const values = [1, 2];

// Fewer variables than values: the rest are ignored.
const [a] = values;
console.log(a); // 1

// More variables than values: the extra ones are undefined.
const [x, y, z] = values;

console.log(x); // 1
console.log(y); // 2
console.log(z); // undefined
