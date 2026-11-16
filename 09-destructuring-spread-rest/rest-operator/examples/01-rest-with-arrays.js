// Rest with arrays: the first two values, then the rest in a new array.
const numbers = [10, 20, 30, 40, 50];

const [first, second, ...others] = numbers;

console.log(first); // 10
console.log(second); // 20
console.log(others); // [ 30, 40, 50 ]
