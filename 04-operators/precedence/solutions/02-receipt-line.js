export function receiptLine(itemsPrice, shipping) {
    return 'Total: ' + (itemsPrice + shipping) + ' EUR';
}
