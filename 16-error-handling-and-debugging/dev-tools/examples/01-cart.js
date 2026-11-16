const cart = [
    { name: 'Notebook', price: 10 },
    { name: 'Pen', price: 5 },
    { name: 'Backpack', price: '40' }
];

function addItem(total, item) {
    return total + item.price;
}

function cartTotal(items) {
    let total = 0;
    for (const item of items) {
        total = addItem(total, item);
    }
    return total;
}

console.log(cartTotal(cart)); // 1540
