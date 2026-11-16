const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);

console.log(flat); // [ 1, 2, 3, 4, 5 ]
