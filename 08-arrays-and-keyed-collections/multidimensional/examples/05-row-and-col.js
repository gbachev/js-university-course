const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
        console.log(`grid[${row}][${col}] =`, grid[row][col]);
    }
}
// grid[0][0] = 1
// grid[0][1] = 2
// ...
// grid[2][2] = 9
