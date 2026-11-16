export function formatPrice(price) {
    return typeof price === 'number' ? price + ' EUR' : 'Price on request';
}
