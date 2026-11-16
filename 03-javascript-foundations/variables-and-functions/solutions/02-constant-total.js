export function checkoutTotal(price, quantity, shipping) {
    // let, because total gets a new value on the next line.
    let total = price * quantity;
    total = total + shipping;
    return total;
}
