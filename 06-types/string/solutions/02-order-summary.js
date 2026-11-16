export function orderSummary(name, count, total) {
    const word = count === 1 ? 'book' : 'books';
    return `${name} ordered ${count} ${word} for $${total.toFixed(2)}`;
}
