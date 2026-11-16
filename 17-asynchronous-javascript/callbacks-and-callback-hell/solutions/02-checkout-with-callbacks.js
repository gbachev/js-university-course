const users = { 1: 'Jane Doe', 2: 'John Doe' };
const carts = { 1: 60, 2: 150 };

export function loadUser(id, callback) {
    setTimeout(() => {
        if (!(id in users)) {
            callback(new Error(`Unknown user: ${id}`));
            return;
        }
        callback(null, { id, name: users[id] });
    }, 100);
}

export function loadCart(user, callback) {
    setTimeout(() => callback(null, { items: 2, total: carts[user.id] }), 100);
}

export function chargeCard(user, total, callback) {
    setTimeout(() => {
        if (total > 100) {
            callback(new Error('Card declined'));
            return;
        }
        callback(null, { id: 'PAY-1042', total });
    }, 100);
}

export function checkout(userId, done) {
    let user;

    loadUser(userId, onUser);

    function onUser(error, result) {
        if (error) return done(error);
        user = result;
        loadCart(user, onCart);
    }

    function onCart(error, cart) {
        if (error) return done(error);
        chargeCard(user, cart.total, onPayment);
    }

    function onPayment(error, payment) {
        if (error) return done(error);
        done(null, payment);
    }
}
