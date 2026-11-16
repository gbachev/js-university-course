let numbers = [10, 20, 30];
let result = numbers.splice(1, 1, 25, 26);

console.log(result); // [ 20 ]
console.log(numbers); // [ 10, 25, 26, 30 ]
