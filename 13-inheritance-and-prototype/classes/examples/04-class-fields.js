// Every cart gets its own items array from the class field.
class Cart {
    items = [];
    currency = 'EUR';

    constructor(owner) {
        this.owner = owner;
    }

    add(item) {
        this.items.push(item);
        return this;
    }
}

const johnsCart = new Cart('John Doe');
const janesCart = new Cart('Jane Doe');

johnsCart.add('book').add('pen');

console.log(johnsCart.items); // [ 'book', 'pen' ]
console.log(janesCart.items); // []
console.log(Object.keys(johnsCart)); // [ 'items', 'currency', 'owner' ]
