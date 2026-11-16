// forEach() ignores the promises of its async callback, so the total is still 0.
const prices = { 'book-1': 25, 'book-2': 18, 'book-3': 32 };
const ids = ['book-1', 'book-2', 'book-3'];

function loadPrice(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(prices[id]), 300);
    });
}

async function totalWithForEach() {
    let total = 0;
    ids.forEach(async (id) => {
        total += await loadPrice(id);
    });
    return total;
}

totalWithForEach().then((total) => console.log(total)); // 0
