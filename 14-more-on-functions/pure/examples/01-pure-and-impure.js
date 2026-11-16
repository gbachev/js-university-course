// withVat depends only on its parameters. withCurrentVat reads an outer variable.
function withVat(price, rate) {
    return price * (1 + rate);
}

console.log(withVat(100, 0.2)); // 120
console.log(withVat(100, 0.2)); // 120

let vatRate = 0.2;

function withCurrentVat(price) {
    return price * (1 + vatRate);
}

console.log(withCurrentVat(100)); // 120
vatRate = 0.25;
console.log(withCurrentVat(100)); // 125
