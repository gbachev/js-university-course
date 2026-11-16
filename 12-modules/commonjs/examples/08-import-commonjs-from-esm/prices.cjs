const VAT_RATE = 0.2;

function addVat(price) {
    return round(price * (1 + VAT_RATE));
}

// Not in module.exports, so round() stays private to this file.
function round(amount) {
    return Math.round(amount * 100) / 100;
}

function formatPrice(amount) {
    return `€${amount.toFixed(2)}`;
}

module.exports = { VAT_RATE, addVat, formatPrice };
