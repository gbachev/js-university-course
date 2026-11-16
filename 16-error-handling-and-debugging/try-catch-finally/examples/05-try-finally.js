// try...finally with no catch: the error goes on to the caller, after the cleanup.
const log = [];

function importOrders(text) {
    log.push('start');

    try {
        const orders = JSON.parse(text);
        return orders.length;
    } finally {
        log.push('end');
    }
}

console.log(importOrders('[{"id":1},{"id":2}]')); // 2

try {
    importOrders('not json');
} catch (error) {
    console.log(error.name); // SyntaxError
}

console.log(log.join(', ')); // start, end, start, end
