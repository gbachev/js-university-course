// Not for Node: it runs in a page with RequireJS, see the README.
// The first module RequireJS runs: it loads cart.js, which loads prices.js.
require(['cart'], function (cart) {
    const items = [
        { name: 'Notebook', price: 10 },
        { name: 'Pen', price: 2.5 },
    ];

    console.log(cart.cartTotal(items)); // €12.50
});
