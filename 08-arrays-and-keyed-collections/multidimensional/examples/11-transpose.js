const matrix = [
    [1, 2, 3],
    [4, 5, 6]
];

const transposed = matrix[0].map((_, colIndex) =>
    matrix.map(row => row[colIndex])
);

console.log(transposed);
// [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
