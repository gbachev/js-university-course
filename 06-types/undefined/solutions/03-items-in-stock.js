export function getStock(stock, product) {
    const items = stock[product];
    return items === undefined ? 0 : items;
}
