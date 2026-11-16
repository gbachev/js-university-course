// A 0 ms timer still waits until the loop, and the rest of the script, has finished.
function placeOrder() {
    const order = { id: 1042, total: 60 };

    setTimeout(() => {
        console.log(`Order ${order.id}: ${order.total} EUR`);
    }, 0);
}

placeOrder();

let checks = 0;

for (let i = 0; i < 300000000; i++) {
    checks++;
}

console.log(`Done after ${checks} checks`);

// Done after 300000000 checks
// Order 1042: 60 EUR
