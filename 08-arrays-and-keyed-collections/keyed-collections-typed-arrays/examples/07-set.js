const set = new Set();
set.add('apple');
set.add('banana');
set.add('apple'); // Duplicate, not added

console.log(set.has('apple')); // true
console.log(set.size); // 2

for (let item of set) console.log(item);
// Logs: apple, banana
console.log(set); // Set(2) { 'apple', 'banana' }
