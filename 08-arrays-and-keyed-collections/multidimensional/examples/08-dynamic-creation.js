const rows = 3;
const cols = 4;
const table = [];

for (let i = 0; i < rows; i++) {
    table[i] = [];
    for (let j = 0; j < cols; j++) {
        table[i][j] = i * cols + j;
    }
}

console.log(table);
// [ [ 0, 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9, 10, 11 ] ]
