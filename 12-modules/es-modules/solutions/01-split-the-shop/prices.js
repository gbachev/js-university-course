export const VAT_RATE = 0.2;

export function addVat(price) {
    return round(price * (1 + VAT_RATE));
}

function round(amount) {
    return Math.round(amount * 100) / 100;
}

export function formatPrice(amount) {
    return `€${amount.toFixed(2)}`;
}
