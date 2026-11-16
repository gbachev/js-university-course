export function createDiscount(percent) {
    return function (price) {
        const discounted = price - (price * percent) / 100;
        return Math.round(discounted * 100) / 100;
    };
}
