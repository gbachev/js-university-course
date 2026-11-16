// An array on the prototype is shared by every object that inherits it.
const cartMethods = {
    items: [],
    add(name) {
        this.items.push(name);
    }
};

const johnCart = Object.create(cartMethods);
const janeCart = Object.create(cartMethods);

johnCart.add('Book');

console.log(janeCart.items); // [ 'Book' ]
console.log(Object.hasOwn(johnCart, 'items')); // false
