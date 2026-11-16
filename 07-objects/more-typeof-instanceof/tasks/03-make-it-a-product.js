// Task 3: Make it a product
// Lecture: typeof vs instanceof
//
// Our shop creates products with the Product constructor, but the import from the old
// system gives us plain objects like { name: 'Hat', price: 15 }. Write
// toProduct(item): when item was created with new Product, it returns item itself,
// unchanged. Otherwise it returns a new Product with the item's name and price. Use
// instanceof: typeof says 'object' for both.
//
// Examples:
//   const hat = new Product('Hat', 15);
//   toProduct(hat) === hat                        // true
//   toProduct({ name: 'Scarf', price: 22 })       // Product { name: 'Scarf', price: 22 }
//
// Run the tests: npm test -- 07-objects/more-typeof-instanceof

export function Product(name, price) {
    this.name = name;
    this.price = price;
}

export function toProduct(item) {
    // Your code here
}
