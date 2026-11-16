const array3D = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const array4D = [
    [[[1, 2], [3, 4]], [[5, 6], [7, 8]]],
    [[[9, 10], [11, 12]], [[13, 14], [15, 16]]]
];

console.log('Iterating through 3D array:');
for (let i = 0; i < array3D.length; i++) {
    for (let j = 0; j < array3D[i].length; j++) {
        for (let k = 0; k < array3D[i][j].length; k++) {
            console.log(array3D[i][j][k]);
        }
    }
}
// Logs: 1, 2, 3, 4, 5, 6, 7, 8

console.log('');

console.log('Iterating through 4D array:');
for (let i = 0; i < array4D.length; i++) {
    for (let j = 0; j < array4D[i].length; j++) {
        for (let k = 0; k < array4D[i][j].length; k++) {
            for (let l = 0; l < array4D[i][j][k].length; l++) {
                console.log(array4D[i][j][k][l]);
            }
        }
    }
}
// Logs: 1, 2, 3, ... 16
