// The methods live in one object, the data in each cart.
const cartMethods = {
    add(name, price) {
        this.items.push({ name, price });
        return this;
    },
    total() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
};

function createCart(owner) {
    const cart = Object.create(cartMethods);
    cart.owner = owner;
    cart.items = [];
    return cart;
}

const johnCart = createCart('John Doe');
const janeCart = createCart('Jane Doe');

johnCart.add('Book', 20).add('Pen', 5);
janeCart.add('Lamp', 45);

console.log(johnCart.total()); // 25
console.log(janeCart.total()); // 45
console.log(johnCart.total === janeCart.total); // true
console.log(Object.keys(johnCart)); // [ 'owner', 'items' ]
