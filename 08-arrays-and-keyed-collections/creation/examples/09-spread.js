let original = [1, 2, 3];
let copy = [...original];
console.log(copy); // [ 1, 2, 3 ]

let str = 'hello';
let chars = [...str];
console.log(chars); // [ 'h', 'e', 'l', 'l', 'o' ]

let merged = [...original, ...chars];
console.log(merged);
// [
//   1,   2,   3,   'h',
//   'e', 'l', 'l', 'o'
// ]
