let numbers = [10, 20, 30];
let result = numbers.splice(1, 0, 15);

console.log(result); // []
console.log(numbers); // [ 10, 15, 20, 30 ]
