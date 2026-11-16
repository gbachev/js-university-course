const orderNumber = /\bORD-(?<year>\d{4})-(?<number>\d{5})\b/g;

export function findOrderNumbers(text) {
    const orders = [];
    for (const match of text.matchAll(orderNumber)) {
        const { year, number } = match.groups;
        orders.push({ year: Number(year), number: Number(number) });
    }
    return orders;
}
