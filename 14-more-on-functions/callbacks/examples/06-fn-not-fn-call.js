// We pass byPrice, the function. byPrice() calls it at once.
const items = [
    { name: 'Keyboard', price: 45 },
    { name: 'Cable', price: 9 },
    { name: 'Mouse', price: 25 }
];

function byPrice(a, b) {
    return a.price - b.price;
}

items.sort(byPrice);
console.log(items[0].name); // Cable

try {
    items.sort(byPrice());
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot read properties of undefined (reading 'price')
}
