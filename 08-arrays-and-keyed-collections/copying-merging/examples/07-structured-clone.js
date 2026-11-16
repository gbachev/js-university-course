const nested = [[1], [2]];
const deep = structuredClone(nested);

deep[0][0] = 99;

console.log(nested); // [ [ 1 ], [ 2 ] ]
console.log(deep); // [ [ 99 ], [ 2 ] ]
