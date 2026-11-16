// The user first, then the orders and the messages together.
function later(value, ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), ms);
    });
}

const loadUser = (id) => later({ id, name: 'Jane Doe' }, 100);
const loadOrders = (user) => later([1042, 1043], 100);
const loadMessages = (user) => later(['Welcome back'], 100);

// considered bad practice: messages wait for orders
async function dashboardOneByOne(userId) {
    const user = await loadUser(userId);
    const orders = await loadOrders(user);
    const messages = await loadMessages(user);
    return `${orders.length} orders, ${messages.length} message`;
}

// better: the user first, then the rest together
async function dashboard(userId) {
    const user = await loadUser(userId);
    const [orders, messages] = await Promise.all([
        loadOrders(user),
        loadMessages(user),
    ]);
    return `${orders.length} orders, ${messages.length} message`;
}

async function compare() {
    let start = Date.now();
    console.log(await dashboardOneByOne(1)); // 2 orders, 1 message
    console.log(`${Date.now() - start} ms`); // about 300 ms

    start = Date.now();
    console.log(await dashboard(1)); // 2 orders, 1 message
    console.log(`${Date.now() - start} ms`); // about 200 ms
}

compare();
