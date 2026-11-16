// Task 2: The order labels
// Lecture: Context vs Scope
//
// createOrder(items, currency) returns an order object with a labels() method. labels()
// returns one label per item, like 'Book: 12.50 EUR'. Right now it throws a TypeError:
// the callback we pass to map() is a regular function, so it has its own this, which
// is undefined, and not the order. Fix the callback so it uses the this of labels().
// Keep labels() a method.
//
// Examples:
//   const order = createOrder([{ name: 'Book', price: 12.5 }], 'EUR');
//   order.labels()   // ['Book: 12.50 EUR']
//
// Run the tests: npm test -- 11-scope-and-variables/context-vs-scope

export function createOrder(items, currency) {
    return {
        items,
        currency,
        labels() {
            return this.items.map(function (item) {
                return `${item.name}: ${item.price.toFixed(2)} ${this.currency}`;
            });
        },
    };
}
