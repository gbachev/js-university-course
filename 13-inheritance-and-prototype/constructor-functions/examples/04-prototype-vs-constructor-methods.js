// A method created in the constructor is copied per cart; one on the prototype is shared.
function Cart(owner) {
    this.owner = owner;
    this.items = [];
    this.describe = function () {
        return `${this.owner} has ${this.items.length} items`;
    };
}

Cart.prototype.add = function (item) {
    this.items.push(item);
    return this;
};

const johnsCart = new Cart('John Doe');
const janesCart = new Cart('Jane Doe');

johnsCart.add('book').add('pen');

console.log(johnsCart.describe()); // John Doe has 2 items
console.log(janesCart.describe()); // Jane Doe has 0 items
console.log(johnsCart.describe === janesCart.describe); // false
console.log(johnsCart.add === janesCart.add); // true
