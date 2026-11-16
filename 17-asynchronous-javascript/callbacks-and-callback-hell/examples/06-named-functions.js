// The same checkout, flattened with named functions. The five fakes stay the same.
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

function checkout(userId) {
    let user;
    let cart;

    loadUser(userId, onUser);

    function onUser(error, result) {
        if (error) return fail(error);
        user = result;
        loadCart(user, onCart);
    }

    function onCart(error, result) {
        if (error) return fail(error);
        cart = result;
        checkStock(cart, onStock);
    }

    function onStock(error) {
        if (error) return fail(error);
        chargeCard(user, cart.total, onPayment);
    }

    function onPayment(error, payment) {
        if (error) return fail(error);
        sendEmail(user, payment, onEmail);
    }

    function onEmail(error) {
        if (error) return fail(error);
        console.log(`Receipt sent to ${user.name}`);
        // Receipt sent to Jane Doe
    }
}

checkout(1);
