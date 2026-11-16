// Task 2: Checkout with callbacks
// Lecture: Callbacks and Callback Hell
//
// loadUser(), loadCart() and chargeCard() below are fake server calls in the
// error-first style, each taking 100 ms. Write checkout(userId, done): it loads the
// user, then the user's cart, then charges the card with the cart total. On success
// it calls done(null, payment) with the payment from chargeCard(). When any step
// fails, it calls done(error) with that step's error and skips the steps after it.
// done is called exactly once. Nested callbacks or named functions both work.
//
// Examples:
//   checkout(1, (error, payment) => console.log(payment));
//   // { id: 'PAY-1042', total: 60 }
//   checkout(2, (error) => console.log(error.message)); // Card declined
//   checkout(9, (error) => console.log(error.message)); // Unknown user: 9
//
// Run the tests: npm test -- 17-asynchronous-javascript/callbacks-and-callback-hell

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
    // Your code here
}
