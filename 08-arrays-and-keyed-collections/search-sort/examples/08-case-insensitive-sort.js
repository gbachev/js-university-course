const names = ['alice', 'Bob', 'Charlie', 'bob', 'ALICE', 'charlie'];

// Default case-sensitive sort
const caseSensitive = [...names].sort();
console.log(caseSensitive);
// [ 'ALICE', 'Bob', 'Charlie', 'alice', 'bob', 'charlie' ]

// Case-insensitive sort
const caseInsensitive = [...names].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: 'base' })
);
console.log(caseInsensitive);
// [ 'alice', 'ALICE', 'Bob', 'bob', 'Charlie', 'charlie' ]
