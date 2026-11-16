const coupons = {
    HELLO10: 0.1,
    STUDENT20: 0.2,
};

function findCoupon(code) {
    return coupons[code] ?? 0;
}

function applyCoupon(price, code) {
    return price * (1 - findCoupon(code));
}

module.exports = { findCoupon, applyCoupon };
