// The worker for task 3. It is finished: we do not change it.
// It answers { ok: true, result } with the total of the prices it gets,
// or { ok: false, error } when a price is not a number.
self.addEventListener('message', (event) => {
    const prices = event.data;
    if (!prices.every((price) => typeof price === 'number')) {
        self.postMessage({ ok: false, error: 'Every price must be a number' });
        return;
    }
    const result = prices.reduce((sum, price) => sum + price, 0);
    self.postMessage({ ok: true, result });
});
