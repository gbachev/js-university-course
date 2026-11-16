// Promise.resolve() and Promise.reject(), and a throw inside then().
const prices = new Map([['book-1', 25]]);

function getPrice(id) {
    if (!prices.has(id)) {
        return Promise.reject(new Error(`No price for ${id}`));
    }
    return Promise.resolve(prices.get(id));
}

getPrice('book-2').catch((error) => console.log(error.message));
// No price for book-2

getPrice('book-1')
    .then((price) => {
        if (price < 30) {
            throw new Error('Minimum order is 30 EUR');
        }
        return price;
    })
    .then((price) => console.log(`Paying ${price} EUR`))
    .catch((error) => console.log(error.message));
// Minimum order is 30 EUR
