export async function loadStock(id, ms) {
    try {
        const response = await fetch(`https://shop.example/api/stock/${id}`, {
            signal: AbortSignal.timeout(ms),
        });
        const stock = await response.json();
        return stock.count;
    } catch (error) {
        if (error.name === 'TimeoutError') {
            return null;
        }
        throw error;
    }
}
