// Methods on the prototype, data on each instance with a class field.
class Cart {
    items = [];

    add(item) {
        this.items.push(item);
    }
}

const johnsCart = new Cart();
const janesCart = new Cart();
johnsCart.add('book');

console.log(johnsCart.items); // [ 'book' ]
console.log(janesCart.items); // []
console.log(johnsCart.add === janesCart.add); // true
