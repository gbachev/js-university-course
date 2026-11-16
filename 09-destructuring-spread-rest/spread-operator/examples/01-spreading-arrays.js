// Spread combines arrays and copies them.
const arr1 = [1, 2];
const arr2 = [3, 4];

// Merge arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [ 1, 2, 3, 4 ]

// Copy array
const copy = [...arr1];
console.log(copy); // [ 1, 2 ]
