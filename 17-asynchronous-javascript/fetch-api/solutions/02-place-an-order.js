export async function createOrder(order) {
    const response = await fetch('https://shop.example/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
    });
    if (!response.ok) {
        throw new Error(`Order not created: status ${response.status}`);
    }
    return response.json();
}
