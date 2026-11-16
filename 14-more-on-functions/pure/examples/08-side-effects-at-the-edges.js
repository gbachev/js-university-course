// Pure functions make the decisions. handleAdd is the only one with side effects.
function addItem(cart, item) {
    return { ...cart, items: [...cart.items, item] };
}

function cartTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}

function cartSummary(cart) {
    return `${cart.items.length} item(s), total ${cartTotal(cart.items)}`;
}

let cart = { owner: 'Jane Doe', items: [] };

function handleAdd(item) {
    cart = addItem(cart, item);
    console.log(cartSummary(cart));
}

handleAdd({ name: 'Keyboard', price: 45 }); // 1 item(s), total 45
handleAdd({ name: 'Mouse', price: 25 }); // 2 item(s), total 70
