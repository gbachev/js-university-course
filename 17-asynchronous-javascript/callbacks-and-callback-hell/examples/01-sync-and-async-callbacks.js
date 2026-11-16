// forEach() calls its callback right away; setTimeout() calls it later.
const prices = [20, 35, 10];

prices.forEach((price) => {
    console.log(`Price: ${price}`);
});
console.log('Prices listed');

setTimeout(() => {
    console.log('Cart saved');
}, 0);
console.log('Saving cart');

// Price: 20
// Price: 35
// Price: 10
// Prices listed
// Saving cart
// Cart saved
