function checkout(cart) {
    console.assert(cart.length > 0, 'Checkout with an empty cart');
    console.trace('checkout called');
}

function onBuyClick() {
    checkout([]);
}

onBuyClick();
// Assertion failed: Checkout with an empty cart
// Trace: checkout called
//     at checkout (05-assert-and-trace.js:3:13)
//     at onBuyClick (05-assert-and-trace.js:7:5)
//     at 05-assert-and-trace.js:10:1
// (Node prints the full paths and some frames of its own.)
//
// To debug it, we run this file with node --inspect-brk and open chrome://inspect
// in Chrome.
