export function parsePrice(text) {
    const price = Number.parseFloat(text);
    return Number.isNaN(price) ? 0 : price;
}
