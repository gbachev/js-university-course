// New items before and after the spread values.
const original = [10, 20];
const withNew = [0, ...original, 30];

console.log(withNew); // [ 0, 10, 20, 30 ]
