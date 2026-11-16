export function formatPrice(amount) {
    return amount.toFixed(2) + ' EUR';
}

export function formatWeight(grams) {
    return (grams / 1000).toFixed(1) + ' kg';
}
