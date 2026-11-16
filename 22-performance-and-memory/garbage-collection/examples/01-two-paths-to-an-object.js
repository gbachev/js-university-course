// An object stays alive while any variable still reaches it.
let cart = { items: ['book', 'lamp'], total: 45 };
const lastCart = cart;

cart = null;
console.log(lastCart.total); // 45
