const cart = { items: 3, discount: 0 };

cart.discount ??= 10;
cart.currency ??= 'EUR';

console.log(cart.discount); // 0
console.log(cart.currency); // EUR
