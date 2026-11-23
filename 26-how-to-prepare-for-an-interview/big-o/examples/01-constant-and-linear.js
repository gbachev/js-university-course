const prices = [12, 25, 8, 30, 20];
const stock = new Map([
    ['dune', 3],
    ['emma', 0],
]);

// O(1): one step, however long the list is
console.log(prices[3]); // 30
console.log(stock.get('dune')); // 3

// O(n): one step per item
let total = 0;
for (const price of prices) {
    total += price;
}
console.log(total); // 95
console.log(prices.includes(99)); // false
