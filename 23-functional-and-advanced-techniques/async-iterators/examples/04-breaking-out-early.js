// A break calls return() on the async generator: finally runs, no further page is fetched.
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
    try {
        while (true) {
            const { items, hasMore } = await fetchPage(page);
            yield* items;
            if (!hasMore) return;
            page++;
        }
    } finally {
        console.log('stopped after page ' + page);
    }
}

for await (const product of allProducts()) {
    console.log(product);
    if (product === 'Monitor') break;
}
// fetching page 1
// Mouse
// Keyboard
// fetching page 2
// Monitor
// stopped after page 2
