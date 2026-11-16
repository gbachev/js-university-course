export function discountOf(percent) {
    return function (price) {
        return price - (price * percent) / 100;
    };
}
