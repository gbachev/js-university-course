// Wrapping an error-first callback function in a promise.
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

function getStockAsync(item) {
    return new Promise((resolve, reject) => {
        getStock(item, (error, count) => {
            if (error) {
                reject(error);
            } else {
                resolve(count);
            }
        });
    });
}

getStockAsync('book')
    .then((count) => console.log(`In stock: ${count}`))
    .catch((error) => console.log(error.message));
// In stock: 3
