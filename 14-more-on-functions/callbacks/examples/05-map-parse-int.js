// map passes the index as the second argument, and parseInt reads it as the radix.
const quantities = ['10', '10', '10'];

console.log(quantities.map(parseInt)); // [ 10, NaN, 2 ]
console.log(quantities.map((value) => parseInt(value, 10)));
// [ 10, 10, 10 ]
