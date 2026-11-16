// Awaiting in a loop adds the waits up; Promise.all() lets them overlap.
const prices = { 'book-1': 25, 'book-2': 18, 'book-3': 32 };
const ids = ['book-1', 'book-2', 'book-3'];

function loadPrice(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(prices[id]), 300);
    });
}

async function totalOneByOne() {
    let total = 0;
    for (const id of ids) {
        total += await loadPrice(id);
    }
    return total;
}

async function totalAtOnce() {
    const all = await Promise.all(ids.map((id) => loadPrice(id)));
    return all.reduce((sum, price) => sum + price, 0);
}

async function compare() {
    let start = Date.now();
    console.log(await totalOneByOne()); // 75
    console.log(`${Date.now() - start} ms`); // about 900 ms

    start = Date.now();
    console.log(await totalAtOnce()); // 75
    console.log(`${Date.now() - start} ms`); // about 300 ms
}

compare();
