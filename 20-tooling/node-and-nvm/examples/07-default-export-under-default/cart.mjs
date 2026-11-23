export const currency = 'EUR';

export default function cartTotal(prices) {
    return prices.reduce((sum, price) => sum + price, 0);
}
