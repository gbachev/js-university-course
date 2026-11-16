const a = [1, 2];
const b = [3, 4];
const combined = [0, ...a, 2.5, ...b];

console.log(combined); // [ 0, 1, 2, 2.5, 3, 4 ]
