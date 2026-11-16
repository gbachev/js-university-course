export const VAT_RATE = 0.2;

export function addVat(price) {
    return round(price * (1 + VAT_RATE));
}

// No export, so round() stays private to this file.
function round(amount) {
    return Math.round(amount * 100) / 100;
}

function formatPrice(amount) {
    return `€${amount.toFixed(2)}`;
}

export { formatPrice };
