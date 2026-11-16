const names = ['john', 'Jane', 'JOHN', 'jane'];

// Default case-sensitive sort
const caseSensitive = [...names].sort();
console.log(caseSensitive);
// [ 'JOHN', 'Jane', 'jane', 'john' ]

// Case-insensitive sort
const caseInsensitive = [...names].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: 'base' })
);
console.log(caseInsensitive);
// [ 'Jane', 'jane', 'john', 'JOHN' ]
