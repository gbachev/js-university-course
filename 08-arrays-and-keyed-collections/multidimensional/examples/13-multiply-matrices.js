const A = [
    [1, 2],
    [3, 4]
];
const B = [
    [5, 6],
    [7, 8]
];

const result = A.map((row, i) =>
    B[0].map((_, j) =>
        row.reduce((sum, val, k) => sum + val * B[k][j], 0)
    )
);

console.log(result); // [ [ 19, 22 ], [ 43, 50 ] ]
