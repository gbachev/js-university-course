// A floating promise loses its result and its error; await brings the error to catch.
// The file ends with an unhandled rejection and exit code 1 on purpose.
function saveCart(items) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Cart service is down'));
        }, 100);
    });
}

// considered bad practice: the promise floats
async function saveAndForget(items) {
    try {
        saveCart(items);
        console.log('Saved');
    } catch (error) {
        console.log('Not saved');
    }
}

// better: await it, so the rejection lands in our catch
async function saveAndReport(items) {
    try {
        await saveCart(items);
        console.log('Saved');
    } catch (error) {
        console.log(`Not saved: ${error.message}`);
    }
}

saveAndReport(['pen']);
saveAndForget(['pen']); // Saved

// Not saved: Cart service is down
// then an unhandled rejection from saveCart()
