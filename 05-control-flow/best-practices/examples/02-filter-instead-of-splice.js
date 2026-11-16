const arr = [1, 2, 2, 3];

// Good: use filter, it gives us a new array and leaves arr as it is
const newArr = arr.filter(num => num !== 2);

console.log(newArr); // [ 1, 3 ]
console.log(arr); // [ 1, 2, 2, 3 ]
