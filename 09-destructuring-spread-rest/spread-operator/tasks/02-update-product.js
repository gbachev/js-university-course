// Task 2: Update a product
// Lecture: The Spread Operator
//
// The product form of our admin page sends only the fields that changed, like
// { price: 899 }. Write updateProduct(product, changes): it returns a new object with
// the product's properties, where the changes overwrite the old values. The id of a
// product never changes, even when the changes contain an id. Mind the spread order,
// and do not change the product or the changes we get.
//
// Examples:
//   updateProduct({ id: 7, name: 'Laptop', price: 999 }, { price: 899 })
//   // { id: 7, name: 'Laptop', price: 899 }
//   updateProduct({ id: 7, name: 'Laptop', price: 999 }, { id: 1, name: 'Notebook' })
//   // { id: 7, name: 'Notebook', price: 999 }
//
// Run the tests: npm test -- 09-destructuring-spread-rest/spread-operator

export function updateProduct(product, changes) {
    // Your code here
}
