export function isCouponValid(today, expiresOn) {
    return today <= expiresOn;
}
