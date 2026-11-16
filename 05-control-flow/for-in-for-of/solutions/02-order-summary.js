export function describeOrder(order) {
    let summary = '';

    for (const key in order) {
        // Every property after the first one starts with a separator.
        if (summary !== '') {
            summary += ', ';
        }
        summary += `${key}: ${order[key]}`;
    }

    return summary;
}
