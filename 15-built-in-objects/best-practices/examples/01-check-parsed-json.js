// Treat parsed JSON as untrusted: valid JSON can still have the wrong shape.
function readCart(text) {
    try {
        const data = JSON.parse(text);
        if (Array.isArray(data?.items)) {
            return data;
        }
    } catch (error) {
        // broken JSON falls through to the default
    }
    return { items: [] };
}

console.log(readCart('{"items":["pen"]}')); // { items: [ 'pen' ] }
console.log(readCart('{"items":"pen"}')); // { items: [] }
console.log(readCart('null')); // { items: [] }
console.log(readCart('{items: pen}')); // { items: [] }
