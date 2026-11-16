export function formatCartTotal(items, currency, locale) {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const money = new Intl.NumberFormat(locale, { style: 'currency', currency });
    return money.format(total);
}
