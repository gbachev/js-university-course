// Task 3: A basket with fields
// Lecture: Classes
//
// Write the Basket class for our shop. A basket has an owner, passed to the
// constructor, and two class fields: items, an empty array, and currency, 'EUR'.
// add(title, price) puts { title, price } into items and returns the basket, so calls
// can be chained. Two getters read the basket: count, the number of items, and total,
// the sum of their prices. Two baskets never share their items.
//
// Examples:
//   const basket = new Basket('Jane Doe');
//   basket.add('Book', 20).add('Pen', 5);
//   basket.count           // 2
//   basket.total           // 25
//   Object.keys(basket)    // ['items', 'currency', 'owner']
//
// Run the tests: npm test -- 13-inheritance-and-prototype/classes

export class Basket {
    // Your code here
}
