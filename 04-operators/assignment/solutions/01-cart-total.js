export function addToCart(total, price, quantity) {
    total += price * quantity;
    return total;
}
