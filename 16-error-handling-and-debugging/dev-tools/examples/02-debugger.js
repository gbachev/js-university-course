const cart = [
    { name: 'Notebook', price: 10 },
    { name: 'Pen', price: 5 },
    { name: 'Backpack', price: '40' }
];

// With DevTools open, the page pauses on the debugger statement for the backpack.
function addItem(total, item) {
    if (typeof item.price !== 'number') {
        debugger;
    }
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
