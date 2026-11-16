export async function loadProduct(id) {
    const response = await fetch(`https://shop.example/api/products/${id}`);
    if (response.status === 404) {
        throw new Error(`Product ${id} not found`);
    }
    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }
    return response.json();
}
