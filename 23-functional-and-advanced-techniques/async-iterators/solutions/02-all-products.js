export async function* allProducts(fetchPage) {
    let page = 1;
    while (true) {
        const { items, hasMore } = await fetchPage(page);
        yield* items;
        if (!hasMore) return;
        page++;
    }
}
