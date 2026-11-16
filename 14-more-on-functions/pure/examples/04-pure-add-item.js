// The pure version builds a new cart and a new items array.
function addItem(cart, item) {
    return { ...cart, items: [...cart.items, item] };
}

const cart = { owner: 'Jane Doe', items: [] };
const updated = addItem(cart, { name: 'Keyboard', price: 45 });

console.log(cart.items.length); // 0
console.log(updated.items.length); // 1
console.log(updated === cart); // false
