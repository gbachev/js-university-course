const boxes = ['book', ['pen', ['ink', ['nib']]], 'mug'];

console.log(boxes.flat());
// [ 'book', 'pen', [ 'ink', [ 'nib' ] ], 'mug' ]
console.log(boxes.flat(Infinity));
// [ 'book', 'pen', 'ink', 'nib', 'mug' ]
