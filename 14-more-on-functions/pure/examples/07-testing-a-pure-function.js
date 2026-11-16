// To test a pure function, we compare its result with the value we expect.
function cartTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}

const items = [
    { name: 'Keyboard', price: 45 },
    { name: 'Mouse', price: 25 }
];

console.log(cartTotal(items) === 70); // true
console.log(cartTotal([]) === 0); // true
console.log(items.length); // 2
