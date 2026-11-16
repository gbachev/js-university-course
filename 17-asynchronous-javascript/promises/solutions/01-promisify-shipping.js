const quotes = { BG: 4.99, DE: 7.5, FR: 6.9 };

export function getShippingQuote(country, callback) {
    setTimeout(() => {
        if (!(country in quotes)) {
            callback(new Error(`No shipping to ${country}`));
            return;
        }
        callback(null, quotes[country]);
    }, 300);
}

export function getShippingQuoteAsync(country) {
    return new Promise((resolve, reject) => {
        getShippingQuote(country, (error, price) => {
            if (error) {
                reject(error);
            } else {
                resolve(price);
            }
        });
    });
}
