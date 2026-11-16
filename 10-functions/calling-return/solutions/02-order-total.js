export function itemsTotal(price, quantity) {
    return price * quantity;
}

export function shippingFor(total) {
    return total >= 50 ? 0 : 4.99;
}

export function orderTotal(price, quantity) {
    const total = itemsTotal(price, quantity);
    return Math.round((total + shippingFor(total)) * 100) / 100;
}
