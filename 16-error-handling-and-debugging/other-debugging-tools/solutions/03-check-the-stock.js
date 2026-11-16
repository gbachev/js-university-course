export function checkStock(products) {
    let negative = 0;
    for (const product of products) {
        const ok = product.stock >= 0;
        console.assert(ok, `${product.title} has negative stock`);
        if (!ok) {
            negative++;
        }
    }
    return negative;
}
