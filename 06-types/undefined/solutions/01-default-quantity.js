export function lineTotal(price, quantity) {
    if (quantity === undefined) {
        return price;
    }
    return price * quantity;
}
