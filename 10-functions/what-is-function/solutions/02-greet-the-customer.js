export function greetCustomer(name) {
    const trimmed = name.trim();
    const formatted = trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
    return `Hello, ${formatted}!`;
}
