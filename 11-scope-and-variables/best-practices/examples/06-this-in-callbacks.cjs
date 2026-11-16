// This file ends in .cjs, so Node runs it in sloppy mode, like the code in the lecture.
// There this in the regular callback is the global object, and this.discount is
// undefined. In strict mode, and in every .js file of this repository, it is undefined
// itself, and pricesBad() throws a TypeError instead.
const cart = {
    prices: [25, 20],
    discount: 0.1,
    // considered bad practice: a regular callback has its own this
    pricesBad() {
        return this.prices.map(function (price) {
            return price * (1 - this.discount);
        });
    },
    // better: a method for this, an arrow for the callback
    discounted() {
        return this.prices.map(
            (price) => price * (1 - this.discount)
        );
    },
};

console.log(cart.discounted()); // [ 22.5, 18 ]
console.log(cart.pricesBad()); // [ NaN, NaN ]
