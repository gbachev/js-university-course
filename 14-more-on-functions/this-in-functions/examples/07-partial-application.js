// Extra arguments given to bind() are fixed in front of the ones passed later.
function addTax(rate, price) {
    return price * (1 + rate);
}

const addVat = addTax.bind(null, 0.2);

console.log(addVat(100)); // 120
console.log(addVat(50)); // 60
