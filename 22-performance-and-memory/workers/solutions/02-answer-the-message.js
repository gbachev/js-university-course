export function handleMessage(data) {
    if (data.type === 'search') {
        const query = data.query.toLowerCase();
        const books = data.books.filter((book) => book.title.toLowerCase().includes(query));
        return { type: 'found', books };
    }
    if (data.type === 'count') {
        return { type: 'counted', count: data.books.length };
    }
    return { type: 'error', message: `Unknown task: ${data.type}` };
}
