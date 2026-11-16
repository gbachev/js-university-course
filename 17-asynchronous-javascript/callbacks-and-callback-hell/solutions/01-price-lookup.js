const prices = { 'book-1': 25, 'book-2': 18 };

export function getPrice(id, callback) {
    setTimeout(() => {
        if (!(id in prices)) {
            callback(new Error(`No price for ${id}`));
            return;
        }
        callback(null, prices[id]);
    }, 200);
}
