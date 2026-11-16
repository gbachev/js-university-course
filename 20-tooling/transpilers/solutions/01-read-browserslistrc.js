export function readBrowserslistrc(text) {
    const queries = [];
    for (const line of text.split('\n')) {
        const withoutComment = line.split('#')[0];
        for (const query of withoutComment.split(',')) {
            if (query.trim() !== '') {
                queries.push(query.trim());
            }
        }
    }
    return queries;
}
