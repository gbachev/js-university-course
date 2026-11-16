// typeof is safe on a name that was never declared: it returns "undefined".
function showTotal(total) {
    const text = `Total: ${total.toFixed(2)} EUR`;

    if (typeof document !== 'undefined') {
        document.title = text; // the browser tab shows the total
    } else {
        console.log(text);
    }
}

showTotal(88.5);
// Node.js prints: Total: 88.50 EUR
