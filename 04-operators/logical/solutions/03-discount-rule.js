export function getsDiscount(isMember, total, hasCoupon) {
    return isMember && (total >= 100 || hasCoupon);
}
