const from = 0;
const to = 100;

// Good: using for when iterating over numbers / range
let oddNumbers = 0;
for (let i = from; i < to; i++) {
    if (i % 2 !== 0) {
        oddNumbers++; // do something
    }
}
console.log(oddNumbers); // 50

const items = ['apple', 'banana', 'cherry'];

// Good: for loop with index when you need the index
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}
// apple, banana, cherry (one per line)

// Better: for...of when you just need values
for (const item of items) {
    console.log(item);
}
// apple, banana, cherry (one per line)
