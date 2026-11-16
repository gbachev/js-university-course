// With several sources, later sources overwrite the same keys of earlier ones.
let a = { x: 1, y: 2 };
let b = { y: 100, z: 3 };

let merged = Object.assign({}, a, b);
console.log(merged); // { x: 1, y: 100, z: 3 }
