const arr = [1, 2, 3];

const doubled = arr.map(x => x * 2);
const big = arr.filter(x => x > 1);
const sum = arr.reduce((total, x) => total + x, 0);

console.log(doubled); // [ 2, 4, 6 ]
console.log(big); // [ 2, 3 ]
console.log(sum); // 6
