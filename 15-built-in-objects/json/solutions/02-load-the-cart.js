export function loadCart(text) {
    try {
        const cart = JSON.parse(text);
        // JSON.parse(null) and JSON.parse('null') return null without throwing.
        return cart ?? { items: [] };
    } catch (error) {
        return { items: [] };
    }
}
