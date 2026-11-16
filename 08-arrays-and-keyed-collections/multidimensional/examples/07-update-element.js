const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

grid[1][1] = 99;
console.log(grid[1]); // [ 4, 99, 6 ]
