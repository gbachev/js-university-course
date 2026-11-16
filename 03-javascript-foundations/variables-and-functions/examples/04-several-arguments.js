// Arguments fill the parameters in order: first to first, second to second.
function orderTotal(price, shipping) {
    return price + shipping;
}

console.log(orderTotal(25, 5)); // 30
console.log(orderTotal(40, 0)); // 40
