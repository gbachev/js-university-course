// push on an argument changes the caller's cart, and we get the same object back.
function addItem(cart, item) {
    cart.items.push(item);
    return cart;
}

const cart = { owner: 'Jane Doe', items: [] };
const updated = addItem(cart, { name: 'Keyboard', price: 45 });

console.log(cart.items.length); // 1
console.log(updated === cart); // true
