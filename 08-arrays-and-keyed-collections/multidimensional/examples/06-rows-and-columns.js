const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const firstRow = grid[0];
const secondColumn = grid.map(row => row[1]);

console.log(firstRow); // [ 1, 2, 3 ]
console.log(secondColumn); // [ 2, 5, 8 ]
