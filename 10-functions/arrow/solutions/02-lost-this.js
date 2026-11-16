export const shop = {
    discount: 10,
    discountedPrices(prices) {
        // The arrow function takes this from discountedPrices, where this is the shop.
        return prices.map(price => price - (price * this.discount) / 100);
    }
};
