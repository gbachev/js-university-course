export function isInStock(stock, product) {
    // includes() gives true or false, so index 0 and -1 cannot trick us.
    return stock.includes(product);
}
