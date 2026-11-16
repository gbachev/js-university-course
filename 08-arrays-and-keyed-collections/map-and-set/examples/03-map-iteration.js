const cart = new Map()
    .set('apple', 3)
    .set('bread', 1)
    .set('milk', 2);

cart.delete('bread');

for (const [item, quantity] of cart) {
    console.log(`${item}: ${quantity}`);
}
// apple: 3
// milk: 2

console.log([...cart.keys()]); // [ 'apple', 'milk' ]
