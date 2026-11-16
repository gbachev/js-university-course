// Task 1: The price with VAT
// Lecture: Context vs Scope
//
// Every product of our shop shares one function, priceWithVat(), as its method. Write
// it: it returns the price of the product it is called on plus VAT. The VAT rate is
// the same for the whole shop and lives in the VAT_RATE variable of this file, so we
// read it from the scope. The price is different for each product, so we read it
// from the context: this. A product whose price changes gives the new result.
//
// Examples:
//   createProduct('Hat', 15).priceWithVat()    // 18
//   createProduct('Book', 30).priceWithVat()   // 36
//
// Run the tests: npm test -- 11-scope-and-variables/context-vs-scope

const VAT_RATE = 20;

export function priceWithVat() {
    // Your code here
}

export function createProduct(name, price) {
    return { name, price, priceWithVat };
}
