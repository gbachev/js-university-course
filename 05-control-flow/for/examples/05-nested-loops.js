// basic matrix represented using nested arrays
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// The outer loop goes through the 3 inner arrays,
// the inner loop through the 4 elements of each: 3 x 4 = 12 iterations.
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
// Output, one value per line: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
