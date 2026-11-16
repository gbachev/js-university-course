export function isSameAmount(paid, invoiced) {
    return paid.valueOf() === invoiced.valueOf();
}
