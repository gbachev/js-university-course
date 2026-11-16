// Anchored at both ends, and no g flag, so test() does not keep a lastIndex.
const couponPattern = /^[A-Z]+\d{2}$/;

export function isValidCoupon(code) {
    return couponPattern.test(code);
}
