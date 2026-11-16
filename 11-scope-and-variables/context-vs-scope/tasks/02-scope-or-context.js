// Task 2: Scope or context?
// Lecture: Context vs Scope
//
// createPrice(amount) returns a price for our shop. Its label() method should return
// the amount with two decimals and the currency, like '12.50 EUR'. It has two bugs:
// it returns '12.50 undefined', and when we change price.amount later, the label
// still shows the old amount. Each value is read from the wrong place. The currency
// is the same for the whole shop and lives in the currency variable of this file
// (scope). The amount belongs to the price object label() is called on (context).
// Fix label().
//
// Examples:
//   createPrice(12.5).label()   // '12.50 EUR'
//   const price = createPrice(12.5);
//   price.amount = 20;
//   price.label()               // '20.00 EUR'
//
// Run the tests: npm test -- 11-scope-and-variables/context-vs-scope

const currency = 'EUR';

export function createPrice(amount) {
    return {
        amount,
        label() {
            return amount.toFixed(2) + ' ' + this.currency;
        },
    };
}
