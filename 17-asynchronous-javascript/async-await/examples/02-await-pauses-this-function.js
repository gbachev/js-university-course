// await pauses only showTotal(); the code after the call runs on.
function later(value) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), 100);
    });
}

async function showTotal() {
    console.log('Loading cart');
    const total = await later(60);
    console.log(`Total: ${total} EUR`);
}

showTotal();
console.log('Rendering the page');
// Loading cart
// Rendering the page
// Total: 60 EUR (100 ms later)
