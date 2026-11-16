const prices = { 'book-1': 25, 'book-2': 18, 'book-3': 32 };

export function loadPrice(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(prices[id]), 300);
    });
}

export async function cartTotal(ids) {
    // map() hands us the promises, so Promise.all() can wait for every one.
    const all = await Promise.all(ids.map((id) => loadPrice(id)));
    return all.reduce((sum, price) => sum + price, 0);
}
