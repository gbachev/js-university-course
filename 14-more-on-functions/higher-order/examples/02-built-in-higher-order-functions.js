// map, filter and reduce take a callback and give back a plain value.
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(n => n * n);
console.log(squares); // [ 1, 4, 9, 16, 25 ]

const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [ 2, 4 ]

const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15
