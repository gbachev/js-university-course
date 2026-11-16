function syncCart(items) {
    throw new Error('Cart service is down');
}

const items = ['Notebook', 'Pen'];

// Considered bad practice: the failure disappears.
try {
    syncCart(items);
} catch {}

// Better: log the details, tell the user.
let notice = '';

try {
    syncCart(items);
} catch (error) {
    console.error(`syncCart failed: ${error.message}`);
    // syncCart failed: Cart service is down
    notice = 'Your cart was not saved. Please try again.';
}

console.log(notice); // Your cart was not saved. Please try again.
