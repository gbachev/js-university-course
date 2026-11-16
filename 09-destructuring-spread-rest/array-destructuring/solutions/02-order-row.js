export function readOrderRow(row) {
    const [orderId, , , total] = row.split(',');

    return { orderId, total: Number(total) };
}
