// A function is a value: we can store it in a variable or in an object.
function formatPrice(amount) {
    return `$${amount.toFixed(2)}`;
}

const format = formatPrice;
const formatters = { price: formatPrice };

console.log(typeof formatPrice); // function
console.log(format(12.5)); // $12.50
console.log(formatters.price(7)); // $7.00
