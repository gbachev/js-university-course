// call(), apply() and a second bind() cannot change a bound this. Only new can.
function getName() {
    return this.name;
}

const john = { name: 'John Doe' };
const jane = { name: 'Jane Doe' };

const johnsName = getName.bind(john);
console.log(johnsName.call(jane)); // John Doe
console.log(johnsName.bind(jane)()); // John Doe

function Product(name) {
    this.name = name;
}

const draft = {};
const BoundProduct = Product.bind(draft);
const book = new BoundProduct('Book');

console.log(book.name); // Book
console.log(draft.name); // undefined
console.log(book instanceof Product); // true
