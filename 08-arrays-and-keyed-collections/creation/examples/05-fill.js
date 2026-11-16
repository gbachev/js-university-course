let filled = new Array(5).fill(3);

console.log(filled); // [ 3, 3, 3, 3, 3 ]

// fill() puts the same array in every slot.
let rows = new Array(3).fill([]);
rows[0].push('x');
console.log(rows); // [ [ 'x' ], [ 'x' ], [ 'x' ] ]

// Array.from() with a function gives each slot a new array.
let separateRows = Array.from({ length: 3 }, () => []);
separateRows[0].push('x');
console.log(separateRows); // [ [ 'x' ], [], [] ]
