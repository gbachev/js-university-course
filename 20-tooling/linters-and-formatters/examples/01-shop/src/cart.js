const TAX_RATE = 0.2;
const SHIPPING = 5;

export function cartTotal(items, coupon) {
    let total = 0;
    for (let item of items) {
        total += item.price * item.qty;
    }
    if (coupon == "SAVE10") {
        total = total * 0.9;
    }
    console.log("total", total);
    return totl * (1 + TAX_RATE);
}
