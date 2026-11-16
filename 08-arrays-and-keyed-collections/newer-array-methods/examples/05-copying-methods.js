const tags = ['js', 'css', 'html', 'sql'];

console.log(tags.toReversed()); // [ 'sql', 'html', 'css', 'js' ]
console.log(tags.toSpliced(1, 2)); // [ 'js', 'sql' ]
console.log(tags.toSpliced(1, 0, 'ts'));
// [ 'js', 'ts', 'css', 'html', 'sql' ]
console.log(tags.with(0, 'ts')); // [ 'ts', 'css', 'html', 'sql' ]
console.log(tags.with(-1, 'php')); // [ 'js', 'css', 'html', 'php' ]
console.log(tags); // [ 'js', 'css', 'html', 'sql' ]

try {
    tags.with(4, 'go');
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // RangeError: Invalid index : 4
}
