export function showTotal(total) {
    const text = `Total: ${total.toFixed(2)} EUR`;

    if (typeof document !== 'undefined') {
        document.title = text;
    } else {
        console.log(text);
    }
}
