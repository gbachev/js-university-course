// Task 1: A private stock count
// Lecture: Private Fields and Static Properties
//
// In our warehouse app, any code can write item.stock = 1000 and the numbers stop
// matching the shelves. Change InventoryItem so the stock lives in a private field,
// #stock. A stock getter lets everyone read it, and remove(quantity) stays the only
// way to change it: it throws a RangeError 'Not enough stock' when we remove more than
// we have. Without a setter, writing item.stock throws a TypeError in strict mode, and
// the stock does not show up in Object.keys() or JSON.stringify().
//
// Examples:
//   const lamp = new InventoryItem('Desk lamp', 10);
//   lamp.remove(3);
//   lamp.stock               // 7
//   Object.keys(lamp)        // ['title']
//   lamp.remove(20)          // throws RangeError: Not enough stock
//
// Run the tests: npm test -- 13-inheritance-and-prototype/private-fields-and-static-properties

export class InventoryItem {
    constructor(title, stock) {
        this.title = title;
        this.stock = stock;
    }

    remove(quantity) {
        if (quantity > this.stock) {
            throw new RangeError('Not enough stock');
        }
        this.stock -= quantity;
    }
}
