// map() passes the value, the index and the array: parseInt takes the index as its radix.
const quantities = ['1', '2', '3'];

console.log(quantities.map(parseInt)); // [ 1, NaN, NaN ]
console.log(quantities.map(s => parseInt(s, 10))); // [ 1, 2, 3 ]
console.log(quantities.map(Number)); // [ 1, 2, 3 ]
