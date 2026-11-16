const set = new Set();
set.add('apple');
set.add('banana');
set.add('apple'); // Duplicate, not added

console.log(set.has('apple')); // true
console.log(set.size); // 2

for (let item of set) console.log(item);
// apple
// banana
console.log(set); // Set(2) { 'apple', 'banana' }

const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];

console.log(unique); // [ 1, 2, 3, 4, 5 ]
