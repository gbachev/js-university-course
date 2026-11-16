// An order total in four small steps, nested by hand: we read it inside out.
const subtotal = items =>
    items.reduce((sum, item) => sum + item.price * item.qty, 0);
const applyDiscount = total => total * 0.9;
const addTax = total => total * 1.2;
const round = total => Math.round(total * 100) / 100;

const cart = [
    { title: 'Dune', price: 12.99, qty: 1 },
    { title: 'The Hobbit', price: 9.5, qty: 2 },
];

console.log(round(addTax(applyDiscount(subtotal(cart))))); // 34.55
