// An undo window: clearTimeout() cancels the real delete before it runs.
let deleteTimerId = null;

function deleteOrder(id) {
    console.log(`Order ${id} deleted. Undo?`);
    deleteTimerId = setTimeout(() => {
        console.log(`Order ${id} removed for good`); // never runs
    }, 5000);
}

function undo() {
    clearTimeout(deleteTimerId);
    console.log('Order restored');
}

deleteOrder(1042);
setTimeout(undo, 2000);

// Order 1042 deleted. Undo?
// Order restored (2 seconds later)
