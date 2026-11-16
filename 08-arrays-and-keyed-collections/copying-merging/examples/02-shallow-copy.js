const nested = [[1], [2]];
const shallow = [...nested];

shallow[0][0] = 99;

console.log(nested); // [ [ 99 ], [ 2 ] ]
