const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(`grid[${i}][${j}] =`, grid[i][j]);
    }
}
// grid[0][0] = 1
// grid[0][1] = 2
// ...
// grid[2][2] = 9
