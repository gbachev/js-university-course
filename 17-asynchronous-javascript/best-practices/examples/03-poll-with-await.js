// Polling as a plain loop: the next check waits for the previous answer.
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const updates = ['packing', 'packing', 'shipped'];

function checkStatus(orderId) {
    return delay(300).then(() => updates.shift());
}

// better: the next check waits for the previous answer
async function waitUntilShipped(orderId) {
    let status = await checkStatus(orderId);
    while (status !== 'shipped') {
        console.log(`Order ${orderId}: ${status}`);
        await delay(1000);
        status = await checkStatus(orderId);
    }
    console.log(`Order ${orderId}: shipped`);
}

waitUntilShipped(1042);
// Order 1042: packing
// Order 1042: packing
// Order 1042: shipped
