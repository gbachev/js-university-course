export function changeQuantity(cart, name, quantity) {
    return {
        ...cart,
        // Only the changed item is copied; the others can stay shared.
        items: cart.items.map((item) =>
            item.name === name ? { ...item, quantity } : item
        ),
    };
}
