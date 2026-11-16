// Pure ECMAScript: runs the same in every engine. Only console.log() comes from the host.
const cart = [
    { title: 'Clean Code', price: 32.5, quantity: 1 },
    { title: 'Eloquent JavaScript', price: 28, quantity: 2 },
];

const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

console.log(total); // 88.5
console.log(JSON.stringify({ items: cart.length, total }));
// {"items":2,"total":88.5}
