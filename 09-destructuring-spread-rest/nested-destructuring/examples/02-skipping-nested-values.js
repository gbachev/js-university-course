// Commas skip values at any level.
const data = [1, [2, 3], 4];

const [, [, third]] = data;
console.log(third); // 3
