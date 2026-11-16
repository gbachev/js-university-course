// Date.now() makes isExpired impure. isExpiredAt lets the caller decide what now is.
const coupon = { code: 'SAVE10', expiresAt: Date.parse('2026-12-31') };

function isExpired(coupon) {
    return Date.now() > coupon.expiresAt;
}

function isExpiredAt(coupon, now) {
    return now > coupon.expiresAt;
}

console.log(isExpiredAt(coupon, Date.parse('2026-11-20'))); // false
console.log(isExpiredAt(coupon, Date.parse('2027-01-15'))); // true
