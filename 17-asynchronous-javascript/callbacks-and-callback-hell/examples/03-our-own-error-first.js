// Our own function following the error-first convention.
const stock = { book: 3, pen: 12 };

function getStock(item, callback) {
    setTimeout(() => {
        if (!(item in stock)) {
            callback(new Error(`Unknown item: ${item}`));
            return;
        }
        callback(null, stock[item]);
    }, 300);
}

function report(error, count) {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log(`In stock: ${count}`);
}

getStock('book', report); // In stock: 3
getStock('lamp', report); // Unknown item: lamp
