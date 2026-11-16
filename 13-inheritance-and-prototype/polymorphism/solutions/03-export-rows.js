export function exportRows(items) {
    return items
        .filter((item) => typeof item.toRow === 'function')
        .map((item) => item.toRow());
}
