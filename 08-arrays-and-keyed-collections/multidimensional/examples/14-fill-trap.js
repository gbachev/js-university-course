// fill() puts the same inner array in every row.
const bad = new Array(3).fill(new Array(3).fill(0));
bad[0][0] = 1;
console.log(bad); // [ [ 1, 0, 0 ], [ 1, 0, 0 ], [ 1, 0, 0 ] ]

// Array.from() calls the function once per row, so every row is a new array.
const good = Array.from({ length: 3 }, () => new Array(3).fill(0));
good[0][0] = 1;
console.log(good); // [ [ 1, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]
