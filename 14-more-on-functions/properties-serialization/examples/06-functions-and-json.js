// JSON.stringify skips functions in objects and writes null for them in arrays.
const product = {
    title: 'Book',
    price: 12,
    format() {
        return `${this.title}: ${this.price} EUR`;
    }
};

console.log(JSON.stringify(product));
// {"title":"Book","price":12}
console.log(JSON.stringify([product.format])); // [null]
