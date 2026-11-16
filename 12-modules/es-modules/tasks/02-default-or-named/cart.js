// The cart module of the shop. Leave this file as it is.
export default function cartTotal(items) {
    let total = 0;
    for (const item of items) {
        total += item.price * item.quantity;
    }
    return total;
}

export function itemCount(items) {
    let count = 0;
    for (const item of items) {
        count += item.quantity;
    }
    return count;
}
