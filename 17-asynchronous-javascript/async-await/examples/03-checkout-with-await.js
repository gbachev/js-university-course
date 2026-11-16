// The checkout from Promises, one line per step, errors in one try...catch.
function later(value) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), 100);
    });
}

const carts = { 1: 60, 2: 150 };

function loadUser(id) {
    return later({ id, name: 'Jane Doe' });
}

function loadCart(user) {
    return later({ items: 2, total: carts[user.id] });
}

function checkStock(cart) {
    return later(cart);
}

function chargeCard(user, total) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (total > 100) {
                reject(new Error('Card declined'));
            } else {
                resolve({ id: 'PAY-1042', total });
            }
        }, 100);
    });
}

function sendEmail(user, payment) {
    return later(`Receipt sent to ${user.name}`);
}

async function checkout(userId) {
    try {
        const user = await loadUser(userId);
        const cart = await loadCart(user);
        await checkStock(cart);
        const payment = await chargeCard(user, cart.total);
        const message = await sendEmail(user, payment);
        console.log(message);
    } catch (error) {
        console.log(`Checkout failed: ${error.message}`);
    }
}

checkout(1).then(() => checkout(2));
// Receipt sent to Jane Doe
// Checkout failed: Card declined
