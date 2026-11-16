export function nextOrderId(lastId) {
    return BigInt(lastId) + 1n;
}
