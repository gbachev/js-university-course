const numbers = [1, 2, 3, 4];

const multiply = (acc, n) => acc * n;
const product = numbers.reduce(multiply, 1);

console.log(product); // 24
