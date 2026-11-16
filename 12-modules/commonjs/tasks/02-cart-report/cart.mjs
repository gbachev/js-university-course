// The cart module of the shop, an ES module. Leave this file as it is.
export const currency = 'EUR';

export default function cartTotal(prices) {
    return prices.reduce((sum, price) => sum + price, 0);
}
