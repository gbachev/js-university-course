const discount = 0.1; // the store-wide discount

// considered bad practice: the parameter hides the outer discount
function checkout(total, discount) {
    return total - total * discount;
}
console.log(checkout(100)); // NaN

// better: a name that says which discount it is
function checkoutWith(total, couponDiscount = 0) {
    return total - total * (discount + couponDiscount);
}
console.log(checkoutWith(100)); // 90
console.log(checkoutWith(100, 0.05)); // 85
