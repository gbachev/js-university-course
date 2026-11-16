export function receipt(items) {
    const formatLine = (item) => `${item.name}: ${item.price.toFixed(2)}`;

    const lines = items.map(formatLine);

    return lines.join('\n');
}
