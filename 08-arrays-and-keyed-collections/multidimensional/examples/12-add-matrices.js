const a = [
    [1, 2],
    [3, 4]
];
const b = [
    [5, 6],
    [7, 8]
];

const sum = a.map((row, i) =>
    row.map((val, j) => val + b[i][j])
);

console.log(sum); // [ [ 6, 8 ], [ 10, 12 ] ]
