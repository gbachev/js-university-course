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
    return loadCart(cartId)
        .then((cart) => {
            if (cart.total < 30) {
                throw new Error('Minimum order is 30 EUR');
            }
            return chargeCard(cart.total);
        })
        .then((payment) => `Paid ${payment.total} EUR with ${payment.id}`);
}
