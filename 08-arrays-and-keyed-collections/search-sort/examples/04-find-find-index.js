const numbers = [5, 10, 15, 20];

const found = numbers.find(n => n > 10);
const index = numbers.findIndex(n => n > 10);

console.log(found); // 15
console.log(index); // 2
