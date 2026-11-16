let arr1 = new Array(); // empty array
let arr2 = new Array(3); // sparse array with length 3 but empty slots
let arr3 = new Array('x', 'y', 'z'); // ["x", "y", "z"]

console.log(arr1); // []
console.log(arr2); // [ <3 empty items> ]
console.log(arr3); // [ 'x', 'y', 'z' ]
