// next(value) becomes the result of the paused yield.
// The first next() only starts the body.
function* cartTotal() {
    let total = 0;
    while (true) {
        const price = yield total;
        total += price;
    }
}

const cart = cartTotal();
console.log(cart.next(100).value); // 0
console.log(cart.next(25).value); // 25
console.log(cart.next(9).value); // 34
