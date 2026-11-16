function addVat(price) {
    return Math.round(price * 1.2 * 100) / 100;
}

module.exports = { addVat };
