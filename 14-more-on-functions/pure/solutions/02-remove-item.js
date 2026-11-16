export function removeItem(cart, name) {
    return { ...cart, items: cart.items.filter((item) => item.name !== name) };
}
