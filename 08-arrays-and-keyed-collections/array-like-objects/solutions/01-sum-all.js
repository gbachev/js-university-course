export function sumPrices() {
    return Array.from(arguments).reduce((total, price) => total + price, 0);
}
