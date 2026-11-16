// Any JSON value works at the top level, and invalid JSON throws a SyntaxError.
console.log(JSON.parse('42')); // 42
console.log(JSON.parse('[1, 2, 3]')); // [ 1, 2, 3 ]

try {
    console.log(JSON.parse('{"theme":"dark",}'));
} catch (error) {
    console.log(error.name); // SyntaxError
}
