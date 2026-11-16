// Task 3: Pay the cart
// Lecture: Promises
//
// Write payCart(cartId) as one flat promise chain with a single error path. It loads
// the cart with loadCart(), checks the total, charges it with chargeCard() and
// fulfills with the text 'Paid <total> EUR with <payment id>'. A total under 30 EUR
// is too small: throw an Error 'Minimum order is 30 EUR' inside then(), so the card
// is never charged. An unknown cart and a declined card reject with their own errors.
// Return the chain and do not catch the errors: the caller handles them.
//
// Examples:
//   payCart('c1').then((text) => console.log(text)); // Paid 60 EUR with PAY-1042
//   payCart('c2').catch((error) => console.log(error.message));
//   // Minimum order is 30 EUR
//
// Run the tests: npm test -- 17-asynchronous-javascript/promises

const carts = { c1: 60, c2: 18, c3: 150 };

export const charged = [];

export function loadCart(cartId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cartId in carts) {
                resolve({ id: cartId, total: carts[cartId] });
            } else {
                reject(new Error(`Cart ${cartId} not found`));
            }
        }, 100);
    });
}

export function chargeCard(total) {
    charged.push(total);
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

export function payCart(cartId) {
    // Your code here
}
