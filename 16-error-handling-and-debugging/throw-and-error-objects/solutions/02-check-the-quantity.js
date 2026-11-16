export function checkQuantity(quantity) {
    if (typeof quantity !== 'number') {
        throw new TypeError(`quantity must be a number, got ${typeof quantity}`);
    }
    if (quantity < 1 || quantity > 99) {
        throw new RangeError(`quantity must be 1-99, got ${quantity}`);
    }
    return quantity;
}
