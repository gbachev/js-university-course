// A fake paginated API, two products per page, read page by page with an async generator.
const products = ['Mouse', 'Keyboard', 'Monitor', 'Webcam', 'Headset'];

function fetchPage(page) {
    console.log(`fetching page ${page}`);
    const start = (page - 1) * 2;
    const result = {
        items: products.slice(start, start + 2),
        hasMore: start + 2 < products.length,
    };
    return new Promise((resolve) => {
        setTimeout(() => resolve(result), 100);
    });
}

async function* allProducts() {
    let page = 1;
    while (true) {
        const { items, hasMore } = await fetchPage(page);
        yield* items;
        if (!hasMore) return;
        page++;
    }
}

for await (const product of allProducts()) {
    console.log(product);
}
// fetching page 1
// Mouse
// Keyboard
// fetching page 2
// Monitor
// Webcam
// fetching page 3
// Headset
