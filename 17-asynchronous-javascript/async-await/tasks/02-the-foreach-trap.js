// Task 2: Out of the forEach trap
// Lecture: async and await
//
// cartTotal(ids) should load the price of every book in the cart with loadPrice()
// and return the sum. Right now it always returns 0: forEach() does not wait for
// the promises of its async callback. Fix it so the requests still run at the same
// time and the total is ready after about 300 ms, not 300 ms per book. An empty
// cart costs 0.
//
// Examples:
//   await cartTotal(['book-1', 'book-2', 'book-3'])   // 75 (after about 300 ms)
//   await cartTotal([])                               // 0
//
// Run the tests: npm test -- 17-asynchronous-javascript/async-await

const prices = { 'book-1': 25, 'book-2': 18, 'book-3': 32 };

export function loadPrice(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(prices[id]), 300);
    });
}

export async function cartTotal(ids) {
    let total = 0;
    ids.forEach(async (id) => {
        total += await loadPrice(id);
    });
    return total;
}
