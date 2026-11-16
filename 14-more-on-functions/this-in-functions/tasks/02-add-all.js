// Task 2: Add them all
// Lecture: this in Functions: call(), apply() and bind()
//
// Our Cart class has an add(product) method, and addAll(products) should add every
// product of the list in one go. Right now addAll throws a TypeError, because it
// passes this.add to forEach and the method loses its this on the way. Fix addAll so
// it adds every product to this cart, in order. addAll of an empty list leaves the
// cart as it is, and two carts keep their products apart.
//
// Examples:
//   const cart = new Cart();
//   cart.addAll(['book', 'pen']);
//   cart.items     // ['book', 'pen']
//
// Run the tests: npm test -- 14-more-on-functions/this-in-functions

export class Cart {
    items = [];

    add(product) {
        this.items.push(product);
    }

    addAll(products) {
        products.forEach(this.add);
    }
}
