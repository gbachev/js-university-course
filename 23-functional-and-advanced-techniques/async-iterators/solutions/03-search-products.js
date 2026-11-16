async function* allProducts(fetchPage) {
    let page = 1;
    while (true) {
        const { items, hasMore } = await fetchPage(page);
        yield* items;
        if (!hasMore) return;
        page++;
    }
}

export async function searchProducts(fetchPage, query, limit) {
    const matches = [];
    if (limit <= 0) return matches;
    const needle = query.toLowerCase();

    for await (const product of allProducts(fetchPage)) {
        if (product.toLowerCase().includes(needle)) {
            matches.push(product);
            if (matches.length === limit) break;
        }
    }
    return matches;
}
