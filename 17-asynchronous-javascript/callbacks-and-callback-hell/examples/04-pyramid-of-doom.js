// Five fake server calls, each taking 100 ms, run in order by nesting the callbacks.
function loadUser(id, callback) {
    setTimeout(() => callback(null, { id, name: 'Jane Doe' }), 100);
}

function loadCart(user, callback) {
    setTimeout(() => callback(null, { items: 2, total: 60 }), 100);
}

function checkStock(cart, callback) {
    setTimeout(() => callback(null), 100);
}

function chargeCard(user, total, callback) {
    setTimeout(() => {
        if (total > 100) {
            callback(new Error('Card declined'));
            return;
        }
        callback(null, { id: 'PAY-1042', total });
    }, 100);
}

function sendEmail(user, payment, callback) {
    setTimeout(() => callback(null), 100);
}

function fail(error) {
    console.log(`Checkout failed: ${error.message}`);
}

loadUser(1, (error, user) => {
    if (error) return fail(error);
    loadCart(user, (error, cart) => {
        if (error) return fail(error);
        checkStock(cart, (error) => {
            if (error) return fail(error);
            chargeCard(user, cart.total, (error, payment) => {
                if (error) return fail(error);
                sendEmail(user, payment, (error) => {
                    if (error) return fail(error);
                    console.log(`Receipt sent to ${user.name}`);
                    // Receipt sent to Jane Doe
                });
            });
        });
    });
});
